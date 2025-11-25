import { Client, type IFrame, type IMessage } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import type {AppDispatch} from "@/lib/store/reducer.ts";
import {WEBSOCKET_URL} from "@/lib/config/base.ts";
import {websocketActions} from "@/lib/store/slices/websocketSlice.ts";

export interface ChatMessage{
    from: string;
    text: string;
    time: string;
}

class StompService {
  private stompClient: Client | null = null;
  private dispatch: AppDispatch | null = null;

  public initialize(dispatch: AppDispatch): void {
    this.dispatch = dispatch;
  }

  /**
   * Configure et active le client STOMP pour qu'il utilise SockJS comme transport.
   */
  public connect(url:string): void {
    if (this.stompClient && this.stompClient.active) {
      console.log('STOMP est déjà connecté.');
      return;
    }

    if (!this.dispatch) {
      console.error('StompService non initialisé. Appelez initialize() avec le dispatch du store.');
      return;
    }

    // Crée un client STOMP
    this.stompClient = new Client({
      // Le point de "colle" : on dit au client STOMP comment créer sa connexion WebSocket.
      // Au lieu d'un WebSocket natif, on lui fournit une connexion SockJS.
      webSocketFactory: () => new SockJS(WEBSOCKET_URL, null, {
          transports: ['websocket', 'xhr-streaming', 'xhr-polling'],
          timeout: 10000
      }),

      // Optionnel : pour le débogage
      debug: (str:any) => {
        console.log('[STOMP]', str);
      },

      // Gérer la connexion réussie
      onConnect: (frame: IFrame) => {
        console.log('✅ Connexion STOMP établie.', frame);
        this.dispatch!(websocketActions.connectionEstablished());
          this.stompClient!.subscribe(url, (message:any) => {
              try {
                  const messageOutput: ChatMessage  = JSON.parse(message.body);
                  console.log(`Response ${messageOutput.from} : ${messageOutput.text} ${messageOutput.time}`);
                  // this.messageSubject.next(messageOutput);
              } catch (error) {
                  console.error('Error parsing message:', error);
              }
          });

        // Exemple : s'abonner à un topic général dès la connexion
        // this.subscribeToTopic('/topic/global-notifications');
      },

      // Gérer la déconnexion
      onDisconnect: () => {
        console.log('🔌 Connexion STOMP fermée.');
        this.dispatch!(websocketActions.connectionClosed());
      },

      // Gérer les erreurs STOMP (ex: authentification refusée)
      onStompError: (frame: IFrame) => {
        console.error('Erreur de broker STOMP:', frame.headers['message'], frame.body);
        this.dispatch!(websocketActions.connectionError());
      },
    });

    // Active la connexion
    this.stompClient.activate();
  }

  /**
   * S'abonne à un "topic" STOMP pour recevoir des messages.
   */
  public subscribeToTopic(topic: string): void {
    if (!this.stompClient || !this.stompClient.active) {
      console.error('Impossible de s\'abonner, le client STOMP n\'est pas connecté.');
      return;
    }

    this.stompClient.subscribe(topic, (message: IMessage) => {
      try {
        const body = JSON.parse(message.body);
        console.log(`📩 Message reçu sur le topic ${topic}:`, body);

        // TODO: Traduire le message en action Redux spécifique
        // if (topic === '/topic/notifications') {
        //   this.dispatch!(notificationsActions.addNotification(body));
        // }

      } catch (error) {
        console.error('Erreur lors du parsing du message STOMP:', error);
      }
    });
  }

  /**
   * Publie un message vers une destination STOMP.
   */
  public publish(destination: string, body: object): void {
    if (!this.stompClient || !this.stompClient.active) {
      console.error('Impossible de publier, le client STOMP n\'est pas connecté.');
      return;
    }
    this.stompClient.publish({ destination, body: JSON.stringify(body) });
  }

  /**
   * Désactive le client STOMP.
   */
  public disconnect(): void {
    if (this.stompClient) {
      this.stompClient.deactivate();
    }
  }
}

// Exporter une instance unique (Singleton) du service
export const stompService = new StompService();

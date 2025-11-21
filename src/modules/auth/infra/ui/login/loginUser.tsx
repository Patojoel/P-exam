import AuthHeader from "../components/AuthHeader";
import { LoginForm } from "./LoginForm";

export const LoginUser = () => {
  return (
    <div
      className={"max-w-3xl  w-[496px] h-[436px] h py-10 md:py-0 flex flex-col gap-8"}
    >
      <AuthHeader title={"Connexion"} titleClassName="text-[1E1F25] text-[40px] font-bold">
        <div className="text-[16px] w-[374px]">
          Merci de renseigner vos informations de connexion pour accéder aux
          fonctionnalités.
        </div>
      </AuthHeader>
    <LoginForm/>
    </div>
  );
};

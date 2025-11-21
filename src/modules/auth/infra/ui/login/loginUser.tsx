import AuthHeader from "../components/AuthHeader";

export const LoginUser = () => {
  return (
    <div className="max-w-[494px] max-h-[436px] flex flex-col justify-center items-center">
      <AuthHeader title={"Connexion"} titleClassName={"text-[60px] font-bold"}>
        <div>
          Merci de renseigner vos informations de connexion pour accéder aux
          fonctionnalités.
        </div>
      </AuthHeader>
      <div>LoginForm</div>
    </div>
  );
};

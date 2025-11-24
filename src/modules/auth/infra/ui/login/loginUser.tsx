import AuthHeader from "../components/AuthHeader";
import { LoginForm } from "./LoginForm";

export const LoginUser = () => {
  return (
    <div className="min-w-[494px] min-h-[400px] flex flex-col justify-center items-center gap-10">
      <AuthHeader
        title={"Connexion"}
        titleClassName={"text-[40px]  text-[#1E1F25] font-bold flex items-center  "}
        descriptionClassName=""
      >
        <div className="text-[16px] flex w-[374px]  items-center">
          Merci de renseigner vos informations de connexion pour accéder aux
          fonctionnalités.
        </div>
      </AuthHeader>
      <div className="w-full ">
        <LoginForm />
      </div>{" "}
    </div>
  );
};

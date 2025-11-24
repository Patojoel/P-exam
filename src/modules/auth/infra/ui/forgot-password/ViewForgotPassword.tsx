import AuthHeader from "../components/AuthHeader";
import { ForgotPasswordForm } from "./ForgotPasswordForm";



export const ViewForgetPassword = () => {
    return (
        <div className="min-w-[494px] min-h-[400px] flex flex-col justify-center items-center gap-10">
            <AuthHeader
                title={"Mot de passe oublié"}
                titleClassName={"text-[40px]  text-[#1E1F25] font-bold flex items-center  "}
                descriptionClassName=""
            >
                <div className="text-[16px] flex w-[374px]  items-center">
                    Si vous avez oublié votre mot de passe, vous pouvez saisir votre adresse email et nous vous enverrons des instructions pour le réinitialiser.
                </div>
            </AuthHeader>
            <div className="w-full ">
                <ForgotPasswordForm />
            </div>{" "}
        </div>
    );
};
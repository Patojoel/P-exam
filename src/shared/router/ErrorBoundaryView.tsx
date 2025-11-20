import { useRouteError } from "react-router-dom";
import IMAGES from "../../assets/images";
import { isDevMode } from "../../lib/config/base";


const ErrorBoundaryView = () => {
  const error = useRouteError() as { message?: string };
  return (
    <div className="w-full h-full  relative  min-h-[calc(100vh-250px)] flex justify-center items-center  bg-bg-right-pattern ">
      <div className="w-full h-full  flex justify-center items-center">
        <div className="w-[360px] md:w-[400px] justify-center h-max items-center p-6 border border-border shadow-custom bg-white rounded-lg">
          <div className="py-4">
            <div className="flex justify-center pt-2">
              <img src={IMAGES.error} alt="" />
            </div>
            <div className="w-full flex flex-col items-center">
              <h1 className="font-bold text-[35px] text-primary mt-5">Oops!</h1>
              <div className="px-5 text-center">
                <span className="text-epim-black font-bold ">
                  Une erreur inattendue est survenue veuillez réessayer plus
                  tard
                </span>
                <div className="text-text-color text-[13px] mt-2">
                  Si le problème persiste, veuillez contacter{" "}
                  <span className="font-medium underline">
                    Votre administrateur
                  </span>
                </div>
              </div>
              {isDevMode && (
                <small className="text-epim-red text-center mt-5">
                  {error?.message}
                </small>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorBoundaryView;

import { zodResolver } from "@hookform/resolvers/zod"
import { InputForgetPasswordSchemaValidate, type InputForgetPasswordSchemaValidateType } from "../../validators/InputLoginFormSchemaValidate"
import { useForm } from "react-hook-form"



export const useForgotPassword = () => {

    const form = useForm<InputForgetPasswordSchemaValidateType>({
        resolver: zodResolver(InputForgetPasswordSchemaValidate)
    })
    const onSubmit = (data: InputForgetPasswordSchemaValidateType) => {
        console.log(data)
    }
    return {
        form,
        onSubmit
    }

}
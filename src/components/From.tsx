import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"
import {useState} from "react";
import SuccessIcon from '../assets/icons/icon-success.svg'

type FormData = {
    email: string;
};

const From = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [submittedEmail, setSubmittedEmail] = useState("");

    const validationSchema = yup.object({
        email: yup
            .string()
            .required("This field is required")
            .email("Valid email required"),
    });

    const {register, reset, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            email: "",
        }
    })

    const clearAll = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        reset()
        setIsOpen(false);
    }

    const onSuccess = (data: FormData) => {
        setSubmittedEmail(data.email);
        setIsOpen(true);
    };

    const submission = handleSubmit(onSuccess)
    return (

        <form onSubmit={submission} className={'w-full flex flex-col gap-4'}>
            <div className={'form-input '}>
                <div className={'label'}>
                    <label htmlFor="email">Email address</label>
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div className={`input-container`}>
                    <input
                        type="email"
                        placeholder={'email@company.com'}
                        {...register("email")}
                        className={`${errors.email && 'border border-Red text-Red bg-Red/10'}`}
                        // className={'border border-Red text-Red bg-Red/10'}
                    />
                </div>
            </div>

            <div className={'relative group'}>
                <div
                    className={'absolute -inset-2 top-4 rounded-lg bg-gradient-to-r from-Rose to-Orange opacity-0 blur-lg group-hover:opacity-75'}>
                </div>
                <button
                    className={'submit-btn relative  group-hover:bg-gradient-to-r group-hover:from-Rose group-hover:to-Orange group-hover:text-white group-hover:py-3 group-hover:px-6 group-hover:cursor-pointer'}
                    type={'submit'}>
                    Subscribe to monthly newsletter
                </button>
            </div>
            {isOpen && (
                <div className={'modal-container'}>
                    <div className={'modal-content'}>
                        <img src={SuccessIcon} alt="Success Icon" className={'w-12'}/>
                        <h1>Thanks for subscribing!</h1>
                        <div>
                            A confirmation email has been sent to <strong>{submittedEmail}</strong> . Please open it and
                            click the button inside to
                            confirm your subscription.
                        </div>
                        <div className={'relative group'}>
                            <div
                                className={'absolute -inset-2 top-4 rounded-lg bg-gradient-to-r from-Rose to-Orange opacity-0 blur-lg group-hover:opacity-75'}>
                            </div>
                            <button
                                className={'submit-btn relative  group-hover:bg-gradient-to-r group-hover:from-Rose group-hover:to-Orange group-hover:text-white group-hover:py-3 group-hover:px-6 group-hover:cursor-pointer'}
                                onClick={clearAll}>
                                Dismiss message
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </form>
    );
};

export default From;
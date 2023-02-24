export interface AuthModalProps {
    isOpen: boolean
    setOpen: ()=>void
}

export interface AuthFormValues {
    email: string,
    password: string,
}
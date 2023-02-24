import React from 'react';
import {AuthFormValues, AuthModalProps} from "./AuthModal.types";
import {Group, Modal, TextInput, Button, SimpleGrid} from "@mantine/core";
import {useForm, isEmail} from "@mantine/form";
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import toast from "react-hot-toast";
import {useAppDispatch} from "../../redux/hooks";
import {setUser} from "../../redux/slices/userSlice";

function AuthModal({isOpen}: AuthModalProps) {
    const dispatch = useAppDispatch();

    const form = useForm<AuthFormValues>({
        initialValues: {
            email: "",
            password: "",
        },
        validate: {
            email: isEmail('Invalid email'),
            password: (value) => (!value || (value.length < 6) ? 'Minimal password is 6 symbols' : null),
        }
    })

    function auth(type: string) {
        form.validate();
        if (form.isValid()) {
            const {email, password} = form.values;
            const auth = getAuth();

            if (type === 'signin') {
                signInWithEmailAndPassword(auth, email, password)
                    .then((res) => {
                        dispatch(setUser({
                            email: res.user.email,
                        }))
                    })
                    .catch(() => toast.error(`Sign In error!`))
                return
            }

            if (type === 'signup') {
                createUserWithEmailAndPassword(auth, email, password)
                    .then((res) => {
                        dispatch(setUser({
                            email: res.user.email,
                        }))
                    })
                    .catch(() => toast.error(`Sign Up error!`))
                return
            }
        }
    }

    return (
        <Modal
            opened={isOpen}
            withCloseButton={false}
            title="Authorize to use the terminal"
            onClose={() => {
            }}
            centered
            overlayBlur={50}
        >
            <form>
                <SimpleGrid cols={1} verticalSpacing="md">

                    <TextInput type="email"
                               label="Your email"
                               placeholder="Your email"
                               required
                               {...form.getInputProps('email')}
                    />

                    <TextInput type="password"
                               label="Your Password"
                               placeholder="Your Password"
                               required
                               {...form.getInputProps('password')}
                    />


                    <Group mt="sm" position="apart" grow>
                        <Button onClick={() => auth('signup')} uppercase>
                            sign up
                        </Button>

                        <Button onClick={() => auth('signin')} uppercase>
                            sign in
                        </Button>
                    </Group>
                </SimpleGrid>
            </form>
        </Modal>
    );
}

export default AuthModal;
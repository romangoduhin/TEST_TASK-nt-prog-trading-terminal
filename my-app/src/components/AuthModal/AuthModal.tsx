import React from 'react';
import {AuthFormValues, AuthModalProps} from "./AuthModal.types";
import {Group, Modal, TextInput, Button, SimpleGrid} from "@mantine/core";
import {useForm, isEmail} from "@mantine/form";

function AuthModal({isOpen}: AuthModalProps) {
    const form = useForm<AuthFormValues>({
        initialValues: {
            email: "",
            password: "",
        },
        validate: {
            email: isEmail('Invalid email'),
            password: (value) => (!value || (value.length < 3) ? 'Minimal password is 3 symbols' : null),
        }
    })

    function onSubmit() {
        form.validate();
        console.log(form.values);
    }

    return (
        <Modal
            opened={isOpen}
            withCloseButton={false}
            title="Authorize to use the terminal"
            onClose={() => {}}
        >
            <SimpleGrid cols={1} verticalSpacing="xl">
                <form>
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
                </form>

                <Group mt="sm" position="apart" grow>
                    <Button onClick={onSubmit} uppercase>
                        sign up
                    </Button>

                    <Button onClick={onSubmit} uppercase>
                        sign in
                    </Button>
                </Group>
            </SimpleGrid>
        </Modal>
    );
}

export default AuthModal;
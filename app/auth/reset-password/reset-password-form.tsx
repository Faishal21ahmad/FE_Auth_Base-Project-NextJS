'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Inputtxt from "@/src/components/elements/input/inputtxt";
import Button from "@/src/components/elements/button/button";
import WrapAuth from "@/src/components/layout/wrapAuth";
import CardAuth from "@/src/components/fragments/cardAuth";
import { Auth } from '@/lib/api/api';

export default function ResetPasswordForm() {
    const params = useSearchParams();
    const token = params.get("token") || "";
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const payload = {
                "token": token,
                "password": password,
                "password_confrim": passwordConfirm
            };

            const res = await Auth.resetPassword(payload);

            if (!res.success) {
                setMessage(res.message);
                return;
            }

            router.push('/auth/login');

        } catch (error) {
            setMessage('Error Service');
        } finally {
            setLoading(false);
        }
    };

    return (
        <WrapAuth>
            <CardAuth>
                <h1 className="text-xl mb-5 mt-3">Reset Password</h1>
                <p className="text-sm text-red-500">{message}</p>

                <form onSubmit={handleResetPassword}>
                    <div>
                        <Inputtxt id="token" type="text" value={token} hidden={true} />

                        <Inputtxt
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            label="Password"
                            placeholder="*******"
                        />

                        <Inputtxt
                            id="passwordConfirm"
                            type="password"
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                            label="Password Confirm"
                            placeholder="*******"
                        />
                    </div>

                    <div className="w-full">
                        <Button
                            type="submit"
                            color="stone"
                            disabled={loading}
                            fullWidth
                            className="mt-4"
                        >
                            {loading ? 'Loading...' : 'Submit'}
                        </Button>
                    </div>
                </form>
            </CardAuth>
        </WrapAuth>
    );
}
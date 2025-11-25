'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Inputtxt from "@/src/components/elements/input/inputtxt";
import Button from "@/src/components/elements/button/button";
import WrapAuth from "@/src/components/layout/wrapAuth";
import CardAuth from "@/src/components/fragments/cardAuth"
import { useSearchParams } from "next/navigation";
import { Auth } from '@/lib/api/api';

export default function ResetPassword() {
    const params = useSearchParams();
    const token = String(params.get("token"));
    const [password, setPassword] = useState('');
    const [passwordConfirm, setpasswordConfirm] = useState('');
    const [massage, setMessage] = useState('');
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const data = {
                "token": token,
                "password": password,
                "password_confrim": passwordConfirm
            }
            const dataRespon = await Auth.resetPassword(data);

            if (!dataRespon.success) {
                setMessage(dataRespon.message)
                return
            } else {
                router.push('/auth/login');
            }
        } catch (error) {
            // alert('Login error: ' + error);
            setMessage('Error Service')
        } finally {
            setLoading(false);
        }
    }

    return (
        <WrapAuth>
            <CardAuth>
                {/* header */}
                <h1 className="text-xl mb-5 mt-3">Reset Password</h1>
                <p className='text-sm text-red-500'>{massage}</p>
                <form onSubmit={handleResetPassword}>
                    {/* Body */}
                    <div className="">
                        <Inputtxt id="token" type="text" value={token} hidden={true} />
                        <Inputtxt id="current-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" placeholder="*******" />
                        <Inputtxt id="passwordConfirm" type="password" value={passwordConfirm} onChange={(e) => setpasswordConfirm(e.target.value)} label="Password Confirm" placeholder="*******" />
                    </div>
                    {/* footer */}
                    <div className="w-full">
                        <Button type="submit" color="stone" disabled={loading} fullWidth className="mt-4">{loading ? 'Loading...' : 'Submit'}</Button>
                    </div>
                </form>
            </CardAuth>
        </WrapAuth>
    )
}
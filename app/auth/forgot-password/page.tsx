'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Inputtxt from "@/src/components/elements/input/inputtxt";
import Button from "@/src/components/elements/button/button";
import WrapAuth from "@/src/components/layout/wrapAuth";
import CardAuth from "@/src/components/fragments/cardAuth"
import { Auth } from '@/lib/api/api';

export default function ForgotPassword() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [massage, setMessage] = useState('');
    const [success, setSuccess] = useState(true);

    const handleForgotPW = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage('');
        setLoading(true);

        try {
            const data = {
                "email": email,
            }

            const dataRespon = await Auth.forgotPassword(data);
            console.log(dataRespon);

            if (!dataRespon.success) {
                setMessage(dataRespon.message)
                setSuccess(dataRespon.success)
                return
            } else {
                setMessage(dataRespon.message)
                setSuccess(dataRespon.success)
                return
            }

        } catch (error) {
            // console.log(error)
            setMessage('Error Service')
        } finally {
            setLoading(false);
        }
    }

    return (
        <WrapAuth>
            <CardAuth>
                {/* header */}
                <h1 className="text-xl mb-5 mt-3">Forgot Password</h1>
                { }
                <p className={`text-sm ${!success ? "text-red-500" : "text-green-500 "} `}>{massage}</p>
                {/* Body */}
                <form onSubmit={handleForgotPW}>
                    <div className="">
                        <Inputtxt id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" placeholder="freya@example.com" />
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
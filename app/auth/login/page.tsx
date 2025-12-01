'use client';
require('dotenv').config({ quiet: true });
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Inputtxt from "@/src/components/elements/input/inputtxt";
import Button from "@/src/components/elements/button/button";
import WrapAuth from "@/src/components/layout/wrapAuth";
import CardAuth from "@/src/components/fragments/cardAuth";
import Link from "@/src/components/elements/link/link";
import { Auth } from '@/lib/api/api';
import { setToken, checkToken } from '@/lib/utils/cookies';
import { jwtDecode } from "jwt-decode";
import { useUser } from "@/contexts/UserDataContext";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [massage, setMessage] = useState('');
    const router = useRouter();
    const { setUserFromToken } = useUser();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const data = {
                "email": email,
                "password": password
            }
            const dataRespon = await Auth.login(data);

            if (!dataRespon.success) {
                setMessage(dataRespon.message)
                return
            } else {
                setToken(dataRespon.token);
                setUserFromToken(dataRespon.token);

                router.push('/dashboard');
            }
        } catch (error) {
            setMessage('Error Service')
            // alert('Login error: ' + error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <WrapAuth>
            <CardAuth>
                {/* header */}
                <h1 className="text-xl mb-5 mt-3">Login Page</h1>
                <p className='text-sm text-red-500'>{massage}</p>
                {/* Body */}
                <form onSubmit={handleLogin}>
                    <div className="">
                        <Inputtxt id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" placeholder="freya@example.com" />
                        <Inputtxt id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" placeholder="*******" />
                    </div>
                    <div className="flex justify-between pr-2">
                        <p></p>
                        <Link to="/auth/forgot-password" className="text-sm text-blue-400 hover:font-semibold ">forgot password ?</Link>
                    </div>
                    {/* footer */}
                    <div className="w-full">
                        <Button type="submit" color="stone" disabled={loading} fullWidth className="mt-4">   {loading ? 'Loading...' : 'Login'}</Button>
                    </div>
                </form>
            </CardAuth>
            <p className="w-full text-center mt-9">You don't have an account, please <Link to="/auth/register" >Register</Link> </p>
        </WrapAuth>
    )
}
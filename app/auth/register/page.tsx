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

export default function Register() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const data = {
                "name": username,
                "email": email,
                "password": password
            }

            const dataRespon = await Auth.registrasi(data);
            console.log(dataRespon);
            if (!dataRespon.success) {
                setMessage(dataRespon.message)
                return
            } else {
                router.push('/dashboard');
            }
        } catch (error) {
            // console.log(error);
            setMessage('Error Service')
        } finally {
            setLoading(false);
        }

    }
    return (
        <WrapAuth>
            <CardAuth>
                {/* header */}
                <h1 className="text-xl mb-5 mt-3">Register Page</h1>
                <p className='text-sm text-red-500'>{message}</p>
                {/* Body */}
                <form onSubmit={handleRegister}>
                    <div className="">
                        <Inputtxt id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} label="Username" autoComplete="username" placeholder="Freyana Fitri" />
                        <Inputtxt id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" placeholder="freya@example.com" />
                        <Inputtxt id="password" type="password"  value={password} onChange={(e) => setPassword(e.target.value)}  autoComplete="current-password" label="Password" placeholder="*******" />
                    </div>
                    {/* footer */}
                    <div className="w-full">
                        <Button type="submit" color="stone" disabled={loading} fullWidth className="mt-4">{loading ? 'Loading...' : 'Submit'}</Button>
                    </div>
                </form>
            </CardAuth>
            <p className="w-full text-center mt-9">Already have an account,<Link to="/auth/login">Log in</Link></p>
        </WrapAuth>
    )
}
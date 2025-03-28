import { useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function VerifyEmail({ status }: { status?: string }) {
    return (
        <>
            <Head title="Email Verification" />

            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
                <Card className="w-full sm:max-w-md">
                    <CardHeader>
                        <CardTitle>Email Verification</CardTitle>
                        <CardDescription>
                            Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you?
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        {status === 'verification-link-sent' && (
                            <div className="mb-4 font-medium text-sm text-green-600">
                                A new verification link has been sent to your email address.
                            </div>
                        )}

                        <div className="mt-4 flex items-center justify-between">
                            <form method="POST" action={route('verification.send')}>
                                <Button type="submit">
                                    Resend Verification Email
                                </Button>
                            </form>

                            <form method="POST" action={route('logout')}>
                                <Button type="submit" variant="outline">
                                    Log Out
                                </Button>
                            </form>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
} 
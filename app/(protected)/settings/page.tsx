
import React from 'react'
import { auth, signOut } from '@/auth'
import { Button } from '@/components/ui/button';

const SettingsPage = async () => {

    const session = await auth();


    return (
        <div>
            {JSON.stringify(session)}

            <form action = {async () => {
                'use server'
                await signOut( )
            }}>
                <Button size={'lg'} variant={'default'}>
                    Logout
                </Button>
            </form>
        </div>
    )
}

export default SettingsPage

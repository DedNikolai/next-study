import { NextResponse } from "next/server";
import {headers, cookies} from 'next/headers';
import {redirect} from 'next/navigation';

export async function DELETE(req: Request, {params}: {params: {id: string}}) {
    const id = params.id;

    // redirect('/blog')
    const headerList = await headers();
    const cookieList = await cookies();
    const type = headerList.get('Contetn-Type');
    const cook = cookieList.get('some_cookie');
    console.log(type, cook);
    cookieList.set('cook', 'valie')
    return NextResponse.json({message: 'DELETED'});
}
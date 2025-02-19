import { NextResponse } from "next/server";
import {headers, cookies} from 'next/headers';

type Params = {
    params: Promise<{
        id: string;
    }>
}

export async function DELETE(req: Request, {params}: Params) {
    const {id} = await params;

    // redirect('/blog')
    const headerList = await headers();
    const cookieList = await cookies();
    const type = headerList.get('Contetn-Type');
    const cook = cookieList.get('some_cookie');
    cookieList.set('cook', 'valie')
    return NextResponse.json({message: 'DELETED'});
}
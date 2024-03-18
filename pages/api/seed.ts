import type { NextApiRequest, NextApiResponse } from 'next'
import { databaseSeed, db } from '../../database'
import { Product } from '../../models'

type Data = { name: string }

export default async function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {

    if ( process.env.NODE_ENV === "production" ) {
        return res.status(401).json( { name: "No tienes acceso a esta API." } )
    }

    await db.connect()
    
    await Product.deleteMany()

    await Product.insertMany( databaseSeed.initialData.products )

    await db.disconnect()

    res.status(200).json( { name: 'Proceso realizado correctamente' } )

}
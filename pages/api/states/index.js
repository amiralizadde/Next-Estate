const handler = (req , res)=>{

    if (req.method !== 'GET') {
        return false
    }

    return res.json({message:'ok'})

      
}

export default handler;
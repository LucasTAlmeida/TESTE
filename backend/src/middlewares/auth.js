import { verify } from 'jsonwebtoken';

export default async(required, response, next)=>{
    const authHeader = request.headers.authorization;
    if(!authHeader){
        return response.status(401).json({ error: "User not authorizeted!"});
    }

    // Bearer 21232f297a57a5a743894a0e4a801fc3
    const [, token] = authHeader.split(" ");
    try{
    const decoded = verify(token, "21232f297a57a5a743894a0e4a801fc3");
    console.log(decoded);

    return next();

} catch(err){
    return response.status(401).json({error: "Invalid JWT token"});

}
};

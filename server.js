import express from "express";
const app=express(); app.use(express.json());
const PORT=process.env.PORT||3000;
const VERIFY_TOKEN=process.env.VERIFY_TOKEN||"TROQUE_ESTE_TOKEN";
app.get("/",(req,res)=>res.json({ok:true,bot:"MegaMoz",status:"online"}));
app.get("/webhook",(req,res)=>{const {"hub.mode":mode,"hub.verify_token":token,"hub.challenge":challenge}=req.query;if(mode==="subscribe"&&token===VERIFY_TOKEN)return res.status(200).send(challenge);res.sendStatus(403)});
app.post("/webhook",(req,res)=>{console.log("WhatsApp webhook:",JSON.stringify(req.body));res.sendStatus(200);});
app.listen(PORT,()=>console.log(`MegaMoz running on port ${PORT}`));

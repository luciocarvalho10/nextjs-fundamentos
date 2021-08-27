// http://localhost:3000/api/clientes/1985
export default function handler(req,res) {
  const codigo = req.query.codigo
  res.status(200).json({codigo})
}
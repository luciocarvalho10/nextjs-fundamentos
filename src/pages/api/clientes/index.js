export default function handler(req, res) {
  if (req.method === "GET") {
    handlerGet(req, res)
  } else {
    res.status(405).send()
  }
}

function handlerGet(req, res) {
  res.status(200).json({
    id: 1,
    nome: "Lucio Portela de Carvalho",
    email: "luciocarvalho10@hotmail.com.br"
  })
}
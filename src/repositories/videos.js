import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

// Caso as categorias separadas dos videos é possivel fazer esse merge
// const URL_VIDEOS = `${config.URL_BACKEND}/categorias?_embed=videos`;

function create(obj) {
  return fetch(URL_VIDEOS, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(obj),
  })
    .then(async (respostaDoServer) => {
      if (respostaDoServer.ok) {
        const resposta = await respostaDoServer.json();
        return resposta;
      }

      throw new Error('Não foi  ossivel acessar o servidor');
    });
}

export default {
  create,
};

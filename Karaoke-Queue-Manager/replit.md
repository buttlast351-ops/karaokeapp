# FM Dance Bar Karaoke

## Overview

App de karaokê em tempo real para o FM Dance Bar com duas telas:

- `/` — Tela do público: login por @ Instagram ou nome, pedir música (1 por pessoa), avaliar quem está cantando, ver fila/ranking/tocadas do dia.
- `/master` — Tela do DJ: abrir/fechar fila (limpa fila viva ao alternar), tocar/próxima/parar, remover músicas da fila, ver ranking ao vivo, score privado das avaliações, tocadas do dia, e histórico de sessões arquivadas.

## Regras importantes

- 1 música por usuário por vez. Só pode pedir outra quando a anterior tocar.
- Quando o DJ abre ou fecha a fila ela é zerada automaticamente.
- A busca de música é feita automaticamente no YouTube (rota `/api/youtube/search`) usando `youtube-sr` (sem chave de API), com filtro automático para "karaoke".
- Quando o DJ clica em "Tocar" ou "Próxima", o vídeo do YouTube é aberto automaticamente em nova aba (controlável pelo toggle "Abrir YouTube auto" no master).
- "Apagar ranking" zera só o ranking ao vivo. "Apagar tocadas" zera só a lista de tocadas. "Arquivar e zerar tudo" arquiva a sessão atual (cantores, médias, músicas tocadas) no histórico do DJ e zera os dados ao vivo. Nada é perdido.
- O DJ também pode apagar entradas individuais do histórico salvo.
- CTA do Instagram (https://www.instagram.com/fmdancebar/) presente nas duas telas.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Frontend**: React + Vite (artifact `karaoke`)
- **Backend**: Express + Socket.IO no `api-server` (path `/api/socket.io`)
- **Realtime**: socket.io / socket.io-client
- **Estado**: em memória no servidor (sessão única, sem DB).

## Key Commands

- `pnpm run typecheck` — typecheck completo.
- `pnpm run build` — build de tudo.
- `pnpm --filter @workspace/api-server run dev` — backend.
- `pnpm --filter @workspace/karaoke run dev` — frontend.

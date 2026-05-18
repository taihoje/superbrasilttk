const baseLinks = {
    up1: "https://pay.pagsegurocheckout.online/KV603kaWvymGw8y", // Verifique
    up2: "https://pay.pagsegurocheckout.online/nQ7kZ7D2NKLG0eJ", // Prossiga
    up3: "https://pay.pagsegurocheckout.online/RmA83EQnm8O3PVp", // Cadastro
    up4: "https://pay.pagsegurocheckout.online/2wq7Gr4evP83BAN", // Pendente
    up5: "https://pay.pagsegurocheckout.online/6YQPgjWlvy73pxz", // Ativar Conta
    up6: "https://pay.pagsegurocheckout.online/5pjw3Rm1rO2g2lQ", // Registro
    up7: "https://pay.pagsegurocheckout.online/521rZJMXmq83eaX", // Acréscimo
    up8: "https://pay.pagsegurocheckout.online/1VOvGVOxVQ9gD62", // Documento
    up9: "https://pay.pagsegurocheckout.online/P5LNZ8DQ6KdZaRy", // Aplicativo
    up10:"https://pay.pagsegurocheckout.online/JqoR32mz0KygVj5", // Abertura
    up11:"https://pay.pagsegurocheckout.online/nWrxGWvE8yoZ654", // Consultoria
    up12:"https://pay.pagsegurocheckout.online/lDW0Za7vlp6gN7E"  // Administrativo
};

function redirect(key) {
    try {
        if (!baseLinks[key]) {
            throw new Error(`Link para ${key} não encontrado!`);
        }

        const url = new URL(baseLinks[key]);
        url.search = new URLSearchParams(window.location.search).toString();

        window.location.href = url.href;
        
    } catch (error) {
        console.error('Erro no redirecionamento:', error);
        alert(`Erro: ${error.message || "Não foi possível redirecionar"}`);
    }
}

// Adiciona duas entradas no histórico para capturar a navegação para trás
history.pushState({}, '', location.href);
history.pushState({}, '', location.href);

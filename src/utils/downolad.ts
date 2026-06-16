interface data {
    file: string,
    nameDownload: string
}

export const download = async ({ file, nameDownload }: data) => {
    try {
        const response = await fetch(file);
        if (!response.ok) throw new Error("Error al obtener el CV.")
        const blob = await response.blob();
        const urlBlob = window.URL.createObjectURL(blob);
        const enlace = document.createElement('a');
        enlace.href = urlBlob;
        enlace.download = nameDownload;
        document.body.appendChild(enlace);
        enlace.click();
        document.body.removeChild(enlace);
        window.URL.revokeObjectURL(urlBlob);
    }
    catch (error) {
        console.error('Error al descargar el PDF:', error);
    }
}
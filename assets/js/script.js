document.addEventListener("DOMContentLoaded", function() {
    // 1. Obtener los parámetros de la URL
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    // 2. Obtener el valor de 'para'
    let paramNombre = urlParams.get('para');

    if (paramNombre) {
        // 3. Reemplazar guiones bajos (_) por espacios ( ) globalmente
        let nombreLimpio = paramNombre.replace(/_/g, ' ');
        
        // 4. Insertar en el HTML
        document.getElementById('nombre-invitado').textContent = nombreLimpio;
        
        // Nota: URLSearchParams ya decodifica automáticamente %26 a &
        // Así que no necesitas hacer nada extra para el ampersand.
    }
});

// Función para copiar el número de cuenta
function copiarNumero() {
    const numero = document.getElementById('numero-cuenta').textContent;
    const btn = document.querySelector('.copy-btn');
    
    navigator.clipboard.writeText(numero).then(function() {
        // Mostrar feedback visual
        const originalHTML = btn.innerHTML;
        
        btn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>';
        
        setTimeout(function() {
            btn.innerHTML = originalHTML;
        }, 2000);
    }).catch(function(err) {
        alert('Error al copiar: ' + err);
    });
}

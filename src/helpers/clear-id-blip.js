export const clearBlipSDK =  (msgDebug="testando limpeza" ) => {
    console.log(msgDebug);
    let blipSDK = localStorage.getItem("blipSdkUAccount")
    console.log(`SDK:${blipSDK}`)
    localStorage.removeItem('blipSdkUAccount');
    let blipSDKAlterado = localStorage.getItem("blipSdkUAccount")
    console.log(`SDK apagado:${blipSDKAlterado}`)
}
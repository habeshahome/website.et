import React, { useEffect } from 'react'

// Zoho Sales Iq Script:
const useScript = (url: string, widgetCode: string): any => {
  useEffect(() => {
    const script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')

    const code = `var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "${widgetCode}", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="${url}";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);d.innerHTML = "<div id='zsiqwidget'></div>";`

    script.appendChild(document.createTextNode(code))
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [url])
}

export default function SalesIQ (): JSX.Element {
  return (
        <>
            {useScript('https://salesiq.zoho.com/widget', process.env.SALESIQ ?? '')}
        </>
  )
}

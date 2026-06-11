const LOG_API_URL = "http://4.224.186.213/evaluation-service/logs";


export async function Log(stack, level, pkg, message) {
    
    const validatedStack = String(stack).toLowerCase();
    const validatedLevel = String(level).toLowerCase();
    const validatedPackage = String(pkg).toLowerCase();

    const payload = {
        stack: validatedStack,       
        level: validatedLevel,       
        package: validatedPackage,  
        message: message             
    };

    try {
        const response = await fetch(LOG_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        
        if (response.status === 200) {
            console.log(`[Remote Log Success] Log ID: ${data.logID}`);
        } else {
            console.warn("[Remote Log Validation Failed]:", data);
        }
    } catch (error) {
        console.error("[Local Fallback Log]", validatedLevel, `[${validatedPackage}]`, message, error.message);
    }
}
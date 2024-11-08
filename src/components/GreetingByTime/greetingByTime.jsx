
const GreetingByTime = () => {
    let greeting
    let hour = new Date().getHours();
    if (hour >= 6 && hour < 12) {
        greeting = "Доброе утро!"
    } else if (hour >= 12 && hour < 18) {
        greeting = "Добрый день!"
    } else {
        greeting = "Добрый вечер!"
    }
    
    return greeting
}
export default GreetingByTime
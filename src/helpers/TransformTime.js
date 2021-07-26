export function TransformTime(InitialTime = null, FinalTime = null){

    // If the params is not empty...

    if(!!InitialTime && !!FinalTime){

        let Time1 = FinalTime.split(':');
        let Time2 = InitialTime.split(':');

        let Date1 = new Date();
        let Date2 = new Date();

        Date1.setHours(Time1[0], Time1[1], Time1[2]);
        Date2.setHours(Time2[0], Time2[1], Time2[2]);

        Date1.setHours(Date1.getHours() - 
        Date2.getHours(), Date1.getMinutes() - 
        Date2.getMinutes(), Date1.getSeconds() - 
        Date2.getSeconds());

        // Transform to string the final time

        let FinalTimeTransform =
        (Date1.getHours() ? Date1.getHours() + 
        (Date1.getHours() > 1 ? " horas" : " hora") : "") + 
        (Date1.getMinutes() ? Date1.getMinutes() + 
        (Date1.getMinutes() > 1 ? " minutos" : " minuto") : "") + 
        (Date1.getSeconds() ? (Date1.getHours() || Date1.getMinutes() ? " y " : "") + 
        Date1.getSeconds() + (Date1.getSeconds() > 1 ? " segundos" : " segundo") : "");
        
        return FinalTimeTransform;
    }
}
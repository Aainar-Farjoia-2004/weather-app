import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}) {

    let HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170";
    let COLD_URL = "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170";
    let RAIN_URL = "https://images.unsplash.com/photo-1433863448220-78aaa064ff47?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1331";


    return (
        <div className="infoBox">
            <div className="cardContainer"> 
                <Card sx={{ maxWidth: 345 }}>

                    <CardMedia
                        sx={{ height: 140 }}
                        image={
                            info.humidity > 80 
                            ? RAIN_URL 
                            : info.temp > 15 
                            ? HOT_URL 
                            : COLD_URL 
                        }
                        title="green iguana"
                    />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}{
                            info.humidity > 80 
                            ?  <ThunderstormIcon/> 
                            : info.temp > 15 
                            ?  <SunnyIcon/> 
                            : <AcUnitIcon/> 
                        }
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p> Humidity = {info.humidity}</p>
                            <p> Min Temp = {info.temMin }&deg;C</p>
                            <p> Max Temp = {info.temMax}&deg;C</p>
                            <p>The weather can be described as {info.weather} and feels like {info.feels_like}&deg;C</p>
                        </Typography>
                    </CardContent>
                    
                </Card>
            </div>
        </div>
    )
}
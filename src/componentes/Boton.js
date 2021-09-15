import React, {Fragment} from 'react';


const Boton = () =>{
    const changeImage = selected => ()=>{
        switch(selected){
            case 1:
                document.getElementById("showedImage").src="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/purina-reconocer-a-un-perro-feliz.jpg?itok=8xw_Cyof";
            break;
            case 2:
                document.getElementById("showedImage").src="https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2020/09/04/tigre.jpeg";
            break;
            case 3: 
                document.getElementById("showedImage").src="https://aws.revistavanityfair.es/prod/designs/v1/assets/1476x1219/246036.jpeg"
            break;
            case 4: 
                document.getElementById("showedImage").src="http://static.animalear.com/b/wp-content/uploads/2018/05/turtle-3422221_1920-1.jpg";
            break;
            case 5:
                document.getElementById("showedImage").src="https://www.nationalgeographic.com.es/medio/2018/02/27/tiburon__1280x720.jpg";
            break;
        }
    }

    return(
        <Fragment>
            <center>
            <div>
            <button style={{marginRight: '50px', marginTop: '10px'}} type="button" class="btn btn-danger" onClick={changeImage(1)}>Perro</button>
            <button style={{marginRight: '50px', marginTop: '10px'}} type="button" class="btn btn-secondary" onClick={changeImage(2)}>Tigre</button>
            <button style={{marginRight: '50px', marginTop: '10px'}} type="button" class="btn btn-warning" onClick={changeImage(3)}>Oso</button>
            <button style={{marginRight: '50px', marginTop: '10px'}} type="button" class="btn btn-success" onClick={changeImage(4)}>Tortuga</button>
            <button style={{marginRight: '50px', marginTop: '10px'}} type="button" class="btn btn-primary" onClick={changeImage(5)}>Tiburon</button>
            
            <hr size="10" width="700px"></hr>
            <img id="showedImage" width="700px" height="500px" border="solid" ></img>
            </div>
            </center>
        </Fragment>
    );
}

export default Boton;
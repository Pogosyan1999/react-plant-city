import styled from "styled-components";
import { Link as Links } from "react-router-dom";

export const IconsContainer = styled.div`
  width: max-content;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  padding-top: 10px;
  padding-left: 30px;
  box-sizing:border-box;

  @media only screen and (max-width:899px) {
    width:50%;
 }

 @media only screen and (max-width:499px) {
  padding-right: 20px;
}



  
`;

export const Button = styled.button`
  width: max-content;
  height: auto;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  display: block;
  font-size: 20px;

  transition: 0.5s;
  &:hover {
    color: var(--color-light-green);
  }

  @media (min-width: 1024px) and (max-width: 1180px){
    font-size:18px;
    
  }

  @media (min-width: 992px) and (max-width: 1023px){
    font-size:16px;
  }


  @media (min-width: 900px) and (max-width: 991px){
    font-size:16px;
  }

  @media (min-width: 800px) and (max-width: 899px){
    font-size:18px;
  }

  @media (min-width: 640px) and (max-width: 799px){
    font-size:15px;
  }

  @media (min-width: 500px) and (max-width: 639px){
    font-size:14px;
  }

  @media (min-width: 360px) and (max-width: 499px){
    font-size:13px;
  }

  @media (min-width: 320px) and (max-width: 359px){
    font-size:13px;
    
  }

  
  
`;

export const UserLink = styled(Links)`
  color: var(--color-black);
  display: block;
  font-size: 24px;
  margin: 0 22px;

  @media (min-width: 1024px) and (max-width: 1180px){
    font-size:20px;
    
  }

  @media (min-width: 992px) and (max-width: 1023px){
    font-size:18px;
  }

  @media (min-width: 800px) and (max-width: 899px){
    font-size:20px;
  }

  @media (min-width: 712px) and (max-width: 799px){
    font-size:18px;
  }

  @media (min-width: 640px) and (max-width: 712px){
    font-size:16px;
    }

    @media (min-width: 500px) and (max-width: 639px){
      font-size:15px;
      margin: 0 10px;
    }

    @media (min-width: 360px) and (max-width: 499px){
      font-size:14px;
      margin: 0 10px
    }

    @media (min-width: 320px) and (max-width: 359px){
      font-size:13px;
      margin:0 8px;
      
    }

  

  
`;

export const ShopLink = styled(Links)`
 padding:5px 30px;
 background:#618916;
 display:flex;
 align-items:center;
 border-radius:4px;
 font-weight:400
 font-size:16px;
 color:var(--color-black);

 @media (min-width: 1024px) and (max-width: 1180px){
  font-size:15px;
  padding:5px 20px;
  
}

@media (min-width: 992px) and (max-width: 1023px){
  font-size:14px;
  padding:3px 18px;
}


@media (min-width: 900px) and (max-width: 991px){
  font-size:14px;
  padding:3px 15px
}

@media (min-width: 800px) and (max-width: 899px){
  padding:5px 15px;
  font-size:16px;
}

@media (min-width: 712px) and (max-width: 799px){
  font-size:16px;
  padding:3px 15px;
}

@media (min-width: 640px) and (max-width: 712px){
  font-size:14px;
  padding:3px 15px;
  }

  @media (min-width: 500px) and (max-width: 639px){
    font-size:15px;
    padding:3px 10px;

  }

  @media (min-width: 360px) and (max-width: 499px){
    font-size:13px;
    padding:3px 10px;
  }

  @media (min-width: 320px) and (max-width: 359px){
    font-size:13px;
    padding:3px 10px;
  }

`;

export const Span = styled.span`
  display: block;
  font-size: 24px;
  margin-right: 5px;

  @media (min-width: 1024px) and (max-width: 1180px){
    font-size:20px;
  }

  @media (min-width: 992px) and (max-width: 1023px){
    font-size:18px;
  }

  @media (min-width: 900px) and (max-width: 991px){
    font-size:16px;
  }

  @media (min-width: 800px) and (max-width:899px){
    font-size:18px;
  }

  @media (min-width: 712px) and (max-width: 799px){
    font-size:18px;
  }

  @media (min-width: 640px) and (max-width: 712px){
   font-size:16px;
   }

   @media (min-width: 500px) and (max-width: 639px){
    font-size:15px;
  }
  @media (min-width: 360px) and (max-width: 499px){
    font-size:14px;
  }

  @media (min-width: 320px) and (max-width: 359px){
    font-size:13px;
  }
  
`;

export const Input = styled.input`
width:200px;
height:30px;
padding: 0 20px;
box-sizing:border:box;
outline:none;
border:1px solid grey;
border-radius:50px;
margin-top:-5px;
position: absolute;
top:100px;
display:none;

@media (min-width: 900px) and (max-width: 991px){
  width:160px;
}

@media (min-width: 800px) and (max-width: 899px){
 width:150px;
}

@media (min-width: 712px) and (max-width: 799px){
  width:140px;
 }

 @media (min-width: 640px) and (max-width: 712px){
  width:140px;
 }

 @media (min-width: 500px) and (max-width: 639px){
  width:77%;
 }

 @media (min-width: 414px) and (max-width: 439px){
  width:75%;
 }

 @media (min-width: 385px) and (max-width: 413px){
  width:73%;
 }

 @media (min-width: 360px) and (max-width: 385px){
  width:72%;
 }







`;




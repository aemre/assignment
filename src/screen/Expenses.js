import { useState } from 'react';
import OtpInput from 'react-otp-input';
import VerificationHeader from '../components/header/VerificationHeader';
import Button,{VARIANT} from '../components/Button'
import Line from '../components/Line';
export default function Expenses() {
  const [otpCode, setOtpCode] = useState("");
    return (
      <>
      <VerificationHeader/>
      <p>We've sent a 6-digit verification code to the email address 
johndoe@gmail.com
</p>
      <OtpInput
        value={otpCode}
        onChange={(val)=>{
          setOtpCode(val)
        }}
        numInputs={6}
        separator={<p>&nbsp;&nbsp;</p>}
        inputStyle={{height:30,width:40,borderRadius:14,borderWidth:1}}
        focusStyle={{borderColor:'red'}}
      />
       <div style={{ height: 60, marginTop: 20 }}>
         
          <Button variant={VARIANT.SECONDARY} navigateRouteName="dashboard" >Log in with near</Button>

        </div>
        <Line/>

        <p>Didn't receive your code?
        </p>
        <p>
        Send to a different email address
        </p>
        <p>
        Resend your code 
        </p>
      </>
    );
  }
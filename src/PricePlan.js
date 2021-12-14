import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';

function PricePlan({plan,id})
{
  const {planType,cost,noofUsers,storage,unlimitedPublicProjects,communityAccess,unlimitedPrivateProjects,dedicatedPhoneSupport,freeSubDomain,monthlySubReports}=plan;
  const Color=(value)=>{ return({color: value?"black":"grey"})};
  const boldItem={fontWeight:"bold"};
  return  <Card sx={{ minWidth: 350,minHeight:"50vh" }}>
       <CardContent>
       <p className="type-style">{planType}</p>
      <p className="align-style"><span className="cost-style"> ${cost}</span><span>/month</span> </p>
       <Divider/>
       <ul className="list-style">
       <li style={Color(noofUsers)} className="row-style"> <DoneIcon style={boldItem}/>{noofUsers===1? "Single User": noofUsers<=5? <span style={boldItem}>{noofUsers} Users</span>: <span style={boldItem}>Unlimited Users</span>} </li>
       <li style={Color(storage)} className="row-style"><DoneIcon style={boldItem}/>{storage}GB Storage</li>
       <li style={Color(unlimitedPublicProjects)} className="row-style">{unlimitedPublicProjects?<DoneIcon style={boldItem}/>:<CloseIcon style={boldItem}/>} Unlimited Public Projects</li>
       <li style={Color(communityAccess)} className="row-style">{communityAccess?<DoneIcon style={boldItem}/>:<CloseIcon style={boldItem}/>}Community Access</li>
       <li style={Color(unlimitedPrivateProjects)} className="row-style">{unlimitedPrivateProjects?<DoneIcon style={boldItem}/>:<CloseIcon style={boldItem}/>}Unlimited Private Projects</li>
       <li style={Color(dedicatedPhoneSupport)} className="row-style">{dedicatedPhoneSupport?<DoneIcon style={boldItem}/>:<CloseIcon style={boldItem}/>}Dedicated Phone Support</li>
       <li style={Color(freeSubDomain)} className="row-style">{freeSubDomain?<DoneIcon style={boldItem}/>:<CloseIcon style={boldItem}/>} {id===2?<span style={boldItem}>Unlimited</span>:""} Free Subdomains</li>
       <li style={Color(monthlySubReports)} className="row-style">{monthlySubReports?<DoneIcon style={boldItem}/>:<CloseIcon style={boldItem}/>}Monthly Status Reports</li>
       </ul>
       </CardContent>
       <CardActions>
       <Button variant="contained" className="button-class">
           BUTTON
        </Button>
      </CardActions>
   </Card>
}

export {PricePlan};
import { memo } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import GroupsIcon from '@mui/icons-material/Groups';

const StatusCard = (props) => {
  return (
    <Card variant='outlined'>
        <CardContent>
            <div className="flex flex-col sm:flex-row sm:space-x-16 px-16">
                <div className="flex flex-col h-full pb-16 sm:pb-0">
                    <div className="sm:pb-24">
                        <h1 className="font-bold"> 288</h1>
                    </div>
                    
                    <div>
                        <p className="text-green-600"> Active</p>
                    </div>
                </div>

                <div className="flex flex-col h-full pb-16 sm:pb-0">
                    <div className="sm:pb-24">
                        <h1 className="font-bold"> 34</h1>
                    </div>
                    
                    <div>
                        <p className="text-red-600"> Inactive </p>
                    </div>
                </div>

                <div className="flex flex-col h-full">
                    <div className="sm:pb-24">
                        <GroupsIcon color="primary" fontSize="large" />
                    </div>
                    <div> 
                        <p> Users </p>
                    </div>
                </div>
            </div>
        </CardContent>
    </Card>
)
}
export default StatusCard;
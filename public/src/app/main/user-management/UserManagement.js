import React from 'react'
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import FusePageSimple from '@fuse/core/FusePageSimple';
import DemoContent from '@fuse/core/DemoContent';
import AddUser from '../../../@bam/core/AddUser';
import StatusCard from '../../../@bam/core/StatusCard';
import UserDataTable from '../../../@bam/core/ReactUserTable'


const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    backgroundColor: theme.palette.background.paper,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
  },
  '& .FusePageSimple-toolbar': {},
  '& .FusePageSimple-content': {},
  '& .FusePageSimple-sidebarHeader': {},
  '& .FusePageSimple-sidebarContent': {},
}));
 
function UserManagementPage(props) {
  const { t } = useTranslation('userManagementPage');
 
  return (
    <Root
      header={
        <div className="p-24 pb-12 text-bold">
          <h2 className="font-bold pb-12">{t('TITLE')}</h2>
          <h3> {t('SUB_TITLE')}</h3>
        </div>
      }
      content={
      <div className="w-full flex flex-col">
        
        <div className="p-12 sm:p-24 w-full mb-12 flex flex-row justify-between space-x-2">
           <StatusCard />
           <StatusCard />
           <StatusCard />
        </div>
        

        <div> 
          <UserDataTable />
        </div>
      </div>
      }
      rightSidebarContent={
        <> </>
      }
      scroll="content"
    />
  );
}

export default UserManagementPage;

import Overview from '../../assets/icons/overview-icon.svg'
import AllPayments from '../../assets/icons/wallet-icon.svg'
import ReconcilledPayments from '../../assets/icons/wallet-icon-2.svg'
import UnReconcilledPayments from '../../assets/icons/wallet-icon-3.svg'
import ManualSettlement from '../../assets/icons/m-settlement.svg'
import AllOrders from '../../assets/icons/all-orders.svg'
import PendingOrders from '../../assets/icons/rec-orders.svg'
import ReconcilledOrders from '../../assets/icons/pending-orders.svg'
import MerchantProfile from '../../assets/icons/user-icon.svg'


export const sideMenuLinks = [
  {
    Parent:'Main',
    links: [
      {
      name: 'Overview',
      icon: Overview,
      url:'/#',
      isActive:true
      }
    ]
  },
{
    Parent:'Payments',
    links: [
      {
      name: 'All Payments',
      icon: AllPayments,
      url:'/#',
      isActive:false
      },
      {
      name: 'Reconcilled Payments',
      icon:ReconcilledPayments,
      url:'/#',
      isActive:false
      },
      {
      name: 'Un - Reconcilled Payments',
      icon:UnReconcilledPayments,
      url:'/#',
      isActive:false
      },
      {
      name: 'Manual Settlement',
      icon:ManualSettlement,
      url:'/#',
      isActive:false
      }
    ]
  },
  {
    Parent:'Orders',
    links: [
      {
      name: 'All Orders',
      icon:AllOrders,
      url:'/#',
      isActive:false
      },
      {
      name: 'Pending Orders',
      icon:PendingOrders,
      url:'/#',
      isActive:false
      },
      {
      name: 'Reconcilled Orders',
      icon:ReconcilledOrders,
      url:'/#',
      isActive:false
      }
    ]
  },
  {
    Parent:'',
    links: [
      {
      name: 'Merchant Profile',
      icon:MerchantProfile,
      url:'/#',
      isActive:false
      }
    ]
  },

]

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthGuardGuard } from '../auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'admin-dashboard',
        pathMatch: 'full'
      },
      {
        path: "admin-dashboard",
        canActivate:[AuthGuardGuard],
        loadChildren: ()=>import("./admin-dashboard/admin-dashboard.module").then(m=>m.AdminDashboardModule)
      },
        //  //Authentication group ends here --

    //Admin global  components starts  here --

  {
    path: "punching-format",
    loadChildren: ()=>import("./punching-format/punching-format.module").then(m=>m.PunchingFormatModule)
  },
  {
    path: "academic-records",
    loadChildren: ()=>import("./academic-records/academic-records.module").then(m=>m.AcademicRecordsModule)
  },
  {
    path: "certificate",
    loadChildren: ()=>import("./certificate/certificate.module").then(m=>m.CertificateModule)
  },
  {
    path: "enquiry",
    loadChildren: ()=>import("./enquiry/enquiry.module").then(m=>m.EnquiryModule)
  },
  {
    path: "manage-teacher",
    loadChildren: ()=>import("./manage-teacher/manage-teacher.module").then(m=>m.ManageTeacherModule)
  },
  {
    path: "promote-to-higher-class",
    loadChildren: ()=>import("./promote-to-higher-class/promote-to-higher-class.module").then(m=>m.PromoteToHigherClassModule)
  },
  {
    path: "subject",
    loadChildren: ()=>import("./subject/subject.module").then(m=>m.SubjectModule)
  },
  {
    path: "tc-issue",
    loadChildren: ()=>import("./tc-issue/tc-issue.module").then(m=>m.TcIssueModule)
  },
  {
    path: "reports",
    loadChildren: ()=>import("./reports/reports.module").then(m=>m.ReportsModule)
  },
    //Admin global  components ends  here --

  //book management group starts here --
  {
    path: "book-return",
    loadChildren: ()=>import("./bookManagementGroup/book-return/book-return.module").then(m=>m.BookReturnModule)
  },
  {
    path: "collection-between-two-dates",
    loadChildren: ()=>import("./bookManagementGroup/collection-between-two-dates/collection-between-two-dates.module").then(m=>m.CollectionBetweenTwoDatesModule)
  },
  {
    path: "punch-sale-rate",
    loadChildren: ()=>import("./bookManagementGroup/punch-sale-rate/punch-sale-rate.module").then(m=>m.PunchSaleRateModule)
  },
  {
    path: "purchase-report",
    loadChildren: ()=>import("./bookManagementGroup/purchase-report/purchase-report.module").then(m=>m.PurchaseReportModule)
  },
  {
    path: "sale-bill-edit-delete",
    loadChildren: ()=>import("./bookManagementGroup/sale-bill-edit-delete/sale-bill-edit-delete.module").then(m=>m.SaleBillEditDeleteModule)
  },
  {
    path: "stalk-out-book-sale",
    loadChildren: ()=>import("./bookManagementGroup/stalk-out-book-sale/stalk-out-book-sale.module").then(m=>m.StalkOutBookSaleModule)
  },
  {
    path: "stalk-in-book-record",
    loadChildren: ()=>import("./bookManagementGroup/stock-in-book-record/stock-in-book-record.module").then(m=>m.StockInBookRecordModule)
  },
  {
    path: "vendor-payment",
    loadChildren: ()=>import("./bookManagementGroup/vendor-payment/vendor-payment.module").then(m=>m.VendorPaymentModule)
  },
  {
    path: "vendor-report",
    loadChildren: ()=>import("./bookManagementGroup/vendor-report/vendor-report.module").then(m=>m.VendorReportModule)
  },
  //book management group ends here --
  //manage fee group starts here --
  {
    path: "bill-amendment",
    loadChildren: ()=>import("./manageFeeGroup/bill-amendment/bill-amendment.module").then(m=>m.BillAmendmentModule)
  },
  {
    path: "fee-payment",
    loadChildren: ()=>import("./manageFeeGroup/fee-payment/fee-payment.module").then(m=>m.FeePaymentModule)
  },
  {
    path: "fee-status",
    loadChildren: ()=>import("./manageFeeGroup/fee-status/fee-status.module").then(m=>m.FeeStatusModule)
  },
  {
    path: "print-receipt",
    loadChildren: ()=>import("./manageFeeGroup/print-receipt/print-receipt.module").then(m=>m.PrintReceiptModule)
  },
  {
    path: "tuition-fee",
    loadChildren: ()=>import("./manageFeeGroup/tuition-fee/tuition-fee.module").then(m=>m.TuitionFeeModule)
  },
  
   //message  group starts here --
  {
    path: "add",
    loadChildren: ()=>import("./messagesGroup/add/add.module").then(m=>m.AddModule)
  },
  {
    path: "add-message",
    loadChildren: ()=>import("./messagesGroup/add-message/add-message.module").then(m=>m.AddMessageModule)
  },
  {
    path: "balance-left",
    loadChildren: ()=>import("./messagesGroup/balance-left/balance-left.module").then(m=>m.BalanceLeftModule)
  },
  {
    path: "check-log",
    loadChildren: ()=>import("./messagesGroup/check-log/check-log.module").then(m=>m.CheckLogModule)
  },
  {
    path: "send-message",
    loadChildren: ()=>import("./messagesGroup/send-message/send-message.module").then(m=>m.SendMessageModule)
  },
  {
    path: "student",
    loadChildren: ()=>import("./messagesGroup/student/student.module").then(m=>m.StudentModule)
  },
  //message  group ends here --

  //reports  group starts here --
  {
    path: "academic-report",
    loadChildren: ()=>import("./reportsGroup/academic-report/academic-report.module").then(m=>m.AcademicReportModule)
  },
  {
    path: "collection-report",
    loadChildren: ()=>import("./reportsGroup/collection-report/collection-report.module").then(m=>m.CollectionReportModule)
  },
  {
    path: "complete-report",
    loadChildren: ()=>import("./reportsGroup/complete-report/complete-report.module").then(m=>m.CompleteReportModule)
  },
  {
    path: "master-report",
    loadChildren: ()=>import(".//reportsGroup/master-report/master-report.module").then(m=>m.MasterReportModule)
  },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

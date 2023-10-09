import { Container, ReportsSection, ReportsList, Col, Report, Head, List, } from "./reports.styles";
import {Pageheader} from "../../components";
import { Search } from "../../ui";
import { useState } from "react";

const Reports = () => {
    const [report, searchReport] = useState('')

    return (  
        <ReportsSection>
            <Pageheader title='reports' />

            <Container>
                <Search placeholder='Search reports...' value={report} setValue={searchReport} />

                <ReportsList>
                    <Col>
                        <Report>
                            <Head>Financial Statements</Head>
                            <List>
                                <p>Profit and Loss Statement</p>
                                <p>Balance Sheet</p>
                                <p>Cash Flow Statement</p>
                                <p>Statement of change in Equity</p>
                            </List>
                        </Report>
                        <Report>
                            <Head>Cash &amp; Cash Equivalents</Head>
                            <List>
                                <p>Receipts &amp; Payments Summary</p>
                                <p>Bank Account Summary</p>
                            </List>
                        </Report>
                        <Report>
                            <Head>General Ledger</Head>
                            <List>
                                <p>Trial Balance</p>
                                <p>General Ledger Summary</p>
                                <p>General Ledger Transactions</p>
                            </List>
                        </Report>
                        <Report>
                            <Head>Customers</Head>
                            <List>
                                <p>Aged Receivables</p>
                                <p>Customer Summary</p>
                                <p>Customer Statements (Unpaid Invoices)</p>
                                <p>Customer Statements (Transactions)</p>
                            </List>
                        </Report>
                    </Col>

                    <Col>
                        <Report>
                            <Head>Suppliers</Head>
                            <List>
                                <p>Aged payables</p>
                                <p>Supplier Summary</p>
                                <p>Supplier Statements (Unpaid Invoices)</p>
                                <p>Supplier Statements (Transactions)</p>
                            </List>
                        </Report>
                        <Report>
                            <Head>Sales invoices</Head>
                            <List>
                                <p>Sales invoice Total by Customer</p>
                                <p>Sales Invoice Totals by Item</p>
                                <p>Sales Invoice Totals by Custom Field</p>
                            </List>
                        </Report>
                        <Report>
                            <Head>Inventory Items</Head>
                            <List>
                                <p>Inventory Value Summary</p>
                                <p>Inventory Quality Summary</p>
                                <p>Inventory Profit Margin</p>
                                <p>Inventory Price List</p>
                                <p>Inventory Quantity by Location</p>
                            </List>
                        </Report>
                        <Report>
                            <Head>Fixed Assets</Head>
                            <List>
                                <p>Fixed Assets Summary</p>
                                <p>Depreciation Calculation Worksheet</p>
                                <p>Inventory Profit Margin</p>
                                <p>Inventory Price List</p>
                                <p>Inventory Quantity by Location</p>
                            </List>
                        </Report>
                    </Col>

                    <Col>
                        <Report>
                            <Head>Expense Claims</Head>
                            <List>
                                <p>Expense claims summary</p>
                            </List>
                        </Report>
                        <Report>
                            <Head>Employees</Head>
                            <List>
                                <p>Employee Summary</p>
                            </List>
                        </Report>
                        <Report>
                            <Head>Payslip</Head>
                            <List>
                                <p>Payslip Summary</p>
                                <p>Payslip Totals per item and Employee</p>
                            </List>
                        </Report>
                        <Report>
                            <Head>Custom Reports</Head>
                            <List>
                                <p>Custom Reports</p>
                            </List>
                        </Report>
                    </Col>
                </ReportsList>
            </Container>
        </ReportsSection>
    );
}
 
export default Reports;
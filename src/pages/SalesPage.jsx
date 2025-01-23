import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import SalesOverviewChart from "../components/sales/SalesOverviewChart";
import SalesByCategoryChart from "../components/sales/SalesByCategoryChart";
import DailySalesTrend from "../components/sales/DailySalesTrend";

const salesStats = {
    totalRevenue: "Ksh.1,234,567",
    averageOrderValue: "Ksh.1278.90",
    conversionRate: "3.45%",
    salesGrowth: "12.3%",
};

const SalesPage = () => {
    return (
        <div className='flex-1 overflow-auto relative z-10'>
            <Header title='Sales Dashboard' />

            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                {/* SALES STATS */}
                <motion.div
                    className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <StatCard name='Total Revenue' icon={DollarSign} value={salesStats.totalRevenue} color='#6366F1' />
                    <StatCard
                        name='Avg-Order Value'
                        icon={ShoppingCart}
                        value={salesStats.averageOrderValue}
                        color='#10B981'
                    />
                    <StatCard
                        name='Conversion Rate'
                        icon={TrendingUp}
                        value={salesStats.conversionRate}
                        color='#F59E0B'
                    />
                    <StatCard name='Sales Growth' icon={CreditCard} value={salesStats.salesGrowth} color='#EF4444' />
                </motion.div>
                <div className='hover:bg-teal-900 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg'>
                    <SalesOverviewChart />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>

                    <div className='hover:bg-pink-900 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg'>
                        <SalesByCategoryChart />
                    </div>
                    <div className='hover:bg-yellow-900  shadow-lg rounded-lg'>
                        <DailySalesTrend />
                    </div>
                </div>
            </main>
        </div>
    );
};
export default SalesPage;
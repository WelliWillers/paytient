import { Box, Flex, Heading, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { Sidebar } from "../../components/sidebar";

import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import { theme } from "../../styles/theme";
import { RiArrowUpSFill, RiShoppingCart2Line } from "react-icons/ri";
import { HeaderBase } from "../../components/Header";

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false
})

const options: ApexOptions = {
    chart: {
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        foreColor: theme.colors.gray[500]
    },
    grid: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    tooltip: {
        enabled: false
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            color: theme.colors.gray[600],
        },
        axisTicks: {
            color: theme.colors.gray[600],
        },
        categories: [
            '2021-05-01T00:00:00.000Z',
            '2021-05-02T00:00:00.000Z',
            '2021-05-03T00:00:00.000Z',
            '2021-05-04T00:00:00.000Z',
            '2021-05-05T00:00:00.000Z',
            '2021-05-06T00:00:00.000Z',
            '2021-05-07T00:00:00.000Z'
        ],
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3,
        }
    }
}

const series = [
    {
        name: "series1", data: [31,120,10,52,13,90, 200]
    }
]

export default function DashBoard() {
    return (
        <Box display="flex">

            <Sidebar />

            <Box w="100%">
                <HeaderBase />
                              
                <Box p="8">
                    <SimpleGrid columns={[1, 2, 3, 4]} gap="4" alignItems="flex-start" mb="8">
                        <Flex 
                            p="8"
                            bg="white"
                            borderRadius={30}
                            pb="4"
                            justify="space-between"
                            flexDirection="column"
                            minHeight="250px"
                            boxShadow="xl"
                        >
                            <Text>
                                <Icon color="blue" as={RiShoppingCart2Line} fontSize="20" /> 
                                Vendas
                            </Text>
                            <Heading textAlign="center">
                                245
                            </Heading>
                            <Text textAlign="center">
                                <Icon as={RiArrowUpSFill} color="green" fontSize={25} /> 
                                12,67%
                            </Text>
                        </Flex>
                        
                        <Flex 
                            p="8"
                            bg="white"
                            borderRadius={30}
                            pb="4"
                            justify="space-between"
                            flexDirection="column"
                            minHeight="250px"
                            boxShadow="xl"
                        >
                            <Text>
                                <Icon color="blue" as={RiShoppingCart2Line} fontSize="20" /> 
                                Vendas
                            </Text>
                            <Heading textAlign="center">
                                245
                            </Heading>
                            <Text textAlign="center">
                                <Icon as={RiArrowUpSFill} color="green" fontSize={25} /> 
                                12,67%
                            </Text>
                        </Flex>
                        
                        <Flex 
                            p="8"
                            bg="white"
                            borderRadius={30}
                            pb="4"
                            justify="space-between"
                            flexDirection="column"
                            minHeight="250px"
                            boxShadow="xl"
                        >
                            <Text>
                                <Icon color="blue" as={RiShoppingCart2Line} fontSize="20" /> 
                                Vendas
                            </Text>
                            <Heading textAlign="center">
                                245
                            </Heading>
                            <Text textAlign="center">
                                <Icon as={RiArrowUpSFill} color="green" fontSize={25} /> 
                                12,67%
                            </Text>
                        </Flex>
                        
                        <Flex 
                            p="8"
                            bg="white"
                            borderRadius={30}
                            pb="4"
                            justify="space-between"
                            flexDirection="column"
                            minHeight="250px"
                            boxShadow="xl"
                        >
                            <Text>
                                <Icon color="blue" as={RiShoppingCart2Line} fontSize="20" /> 
                                Vendas
                            </Text>
                            <Heading textAlign="center">
                                245
                            </Heading>
                            <Text textAlign="center">
                                <Icon as={RiArrowUpSFill} color="green" fontSize={25} /> 
                                12,67%
                            </Text>
                        </Flex>
                        
                    </SimpleGrid>
                    
                    <Box 
                        p="8"
                        bg="white"
                        borderRadius={30}
                        pb="4"
                        boxShadow="xl"
                    >
                        <Text fontSize="lg" mb="4">
                            Inscritos da semana
                        </Text>
                        <Chart options={options} type="area" height="350" series={series} />
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}
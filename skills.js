data=0;
            data1=0;
            data2=0;
            data3=0;
            data4=0;
            data5=0;
             function showData()
             {
                 var1=setInterval("showData1()",35);
                 var2=setInterval("showData2()",35);
                 var3=setInterval("showData3()",35);
                 var4=setInterval("showData4()",35);
                 var5=setInterval("showData5()",35);
                 var6=setInterval("showData6()",35);
             }
                function showData1()
                {
                    document.getElementById("html").innerHTML=data+"%";
                    data +=1;
                    if(data == 91)
                        clearInterval(var1);
                } 
              function showData2()
                    {
                        document.getElementById("c").innerHTML=data+"%";
                        data1 +=1;
                        if(data1 == 75)
                            clearInterval(var2);
                    } 
            function showData3()
                    {
                        document.getElementById("cpp").innerHTML=data+"%";
                        data2 +=1;
                        if(data2 == 80)
                            clearInterval(var3);
                    } 
            function showData4()
                {
                    document.getElementById("java").innerHTML=data+"%";
                    data3 +=1;
                    if(data3 == 85)
                        clearInterval(var4);
                } 
              function showData5()
                    {
                        document.getElementById("bootstrap").innerHTML=data+"%";
                        data4 +=1;
                        if(data4 == 90)
                            clearInterval(var5);
                    } 
            function showData6()
                    {
                        document.getElementById("salesforce").innerHTML=data+"%";
                        data5 +=1;
                        if(data5 == 80)
                            clearInterval(var6);
                    } 
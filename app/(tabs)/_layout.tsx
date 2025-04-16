import React from 'react';
import { View, Text, SafeAreaView, StatusBar, Platform } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Tabs, Slot } from 'expo-router';
import { Pressable } from 'react-native';
import { usePathname, useRouter } from 'expo-router';

// SVG assets as XML strings
const htLogo = `<svg width="43" height="28" viewBox="0 0 43 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.6641 8.82178C9.52441 8.82178 8 10.2847 8 12.2876V12.3013C8 14.1743 9.32617 15.5552 11.2197 15.5552C12.5732 15.5552 13.4346 14.8647 13.7969 14.0854H13.9336C13.9336 14.1606 13.9268 14.2358 13.9268 14.311C13.8516 16.1978 13.1885 17.729 11.623 17.729C10.7549 17.729 10.1465 17.2778 9.88672 16.5874L9.86621 16.519H8.12988L8.14355 16.5942C8.45801 18.105 9.81152 19.1782 11.623 19.1782C14.1045 19.1782 15.6016 17.2095 15.6016 13.8872V13.8735C15.6016 10.3188 13.7695 8.82178 11.6641 8.82178ZM11.6572 14.2017C10.5361 14.2017 9.72266 13.3813 9.72266 12.2397V12.2261C9.72266 11.1255 10.5908 10.2573 11.6777 10.2573C12.7715 10.2573 13.626 11.1392 13.626 12.2671V12.2808C13.626 13.395 12.7715 14.2017 11.6572 14.2017Z" fill="black"/>
<path d="M18.4251 12.5405C19.054 12.5405 19.512 12.062 19.512 11.4604C19.512 10.8521 19.054 10.3804 18.4251 10.3804C17.803 10.3804 17.3382 10.8521 17.3382 11.4604C17.3382 12.062 17.803 12.5405 18.4251 12.5405ZM18.4251 17.6128C19.054 17.6128 19.512 17.1411 19.512 16.5327C19.512 15.9243 19.054 15.4526 18.4251 15.4526C17.803 15.4526 17.3382 15.9243 17.3382 16.5327C17.3382 17.1411 17.803 17.6128 18.4251 17.6128Z" fill="black"/>
<path d="M26.0337 18.9321H27.7222V17.0386H29.0484V15.5825H27.7222V9.06787H25.2271C23.8873 11.105 22.4859 13.3745 21.2076 15.5962V17.0386H26.0337V18.9321ZM22.8482 15.6235V15.521C23.8052 13.8462 24.9468 12.021 25.9586 10.4761H26.0611V15.6235H22.8482Z" fill="black"/>
<path d="M32.8563 18.9321H34.62V9.06787H32.8631L30.286 10.8794V12.5405L32.7401 10.8042H32.8563V18.9321Z" fill="black"/>
</svg>`;

const signalIcon = `<svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.3996 0.666626H15.3996C14.8473 0.666626 14.3996 1.11434 14.3996 1.66663V10.3333C14.3996 10.8856 14.8473 11.3333 15.3996 11.3333H16.3996C16.9519 11.3333 17.3996 10.8856 17.3996 10.3333V1.66663C17.3996 1.11434 16.9519 0.666626 16.3996 0.666626ZM10.7329 2.99993H11.7329C12.2852 2.99993 12.7329 3.44764 12.7329 3.99993V10.3333C12.7329 10.8855 12.2852 11.3333 11.7329 11.3333H10.7329C10.1806 11.3333 9.73287 10.8855 9.73287 10.3333V3.99993C9.73287 3.44764 10.1806 2.99993 10.7329 2.99993ZM7.06639 5.33342H6.06639C5.5141 5.33342 5.06639 5.78113 5.06639 6.33342V10.3334C5.06639 10.8857 5.5141 11.3334 6.06639 11.3334H7.06639C7.61867 11.3334 8.06639 10.8857 8.06639 10.3334V6.33342C8.06639 5.78113 7.61867 5.33342 7.06639 5.33342ZM2.39966 7.33343H1.39966C0.847373 7.33343 0.399658 7.78114 0.399658 8.33343V10.3334C0.399658 10.8857 0.847373 11.3334 1.39966 11.3334H2.39966C2.95194 11.3334 3.39966 10.8857 3.39966 10.3334V8.33343C3.39966 7.78114 2.95194 7.33343 2.39966 7.33343Z" fill="black"/>
</svg>`;

const wifiIcon = `<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.03626 2.7946C10.2522 2.7947 12.3833 3.64613 13.9893 5.17293C14.1102 5.29081 14.3035 5.28932 14.4226 5.1696L15.5786 4.00293C15.6389 3.94221 15.6725 3.85996 15.672 3.77438C15.6715 3.6888 15.6369 3.60695 15.5759 3.54693C11.3608 -0.492614 4.71103 -0.492614 0.495931 3.54693C0.434872 3.6069 0.400228 3.68873 0.399665 3.77431C0.399102 3.85989 0.432666 3.94217 0.492931 4.00293L1.64926 5.1696C1.76829 5.2895 1.96174 5.29099 2.0826 5.17293C3.68875 3.64603 5.82015 2.79459 8.03626 2.7946ZM8.03629 6.59016C9.25378 6.59009 10.4278 7.04262 11.3303 7.85983C11.4524 7.97581 11.6446 7.97329 11.7636 7.85416L12.9183 6.68749C12.9791 6.6263 13.0128 6.54328 13.012 6.45702C13.0111 6.37075 12.9757 6.28844 12.9136 6.22849C10.1654 3.67211 5.90949 3.67211 3.1613 6.22849C3.09922 6.28844 3.0638 6.37079 3.06298 6.45709C3.06217 6.54338 3.09603 6.62639 3.15696 6.68749L4.3113 7.85416C4.43028 7.97329 4.62257 7.97581 4.74463 7.85983C5.6465 7.04316 6.81961 6.59067 8.03629 6.59016ZM10.3494 9.14396C10.3512 9.23046 10.3172 9.31386 10.2554 9.37447L8.25807 11.3901C8.19952 11.4494 8.11969 11.4827 8.0364 11.4827C7.95311 11.4827 7.87329 11.4494 7.81474 11.3901L5.81707 9.37447C5.75536 9.31382 5.72141 9.23039 5.72324 9.14388C5.72507 9.05738 5.76251 8.97546 5.82674 8.91747C7.10231 7.83859 8.9705 7.83859 10.2461 8.91747C10.3102 8.97551 10.3476 9.05745 10.3494 9.14396Z" fill="black"/>
</svg>`;

const batteryIcon = `<svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M3.33866 1.33334H20.0053C20.9258 1.33334 21.672 2.07953 21.672 3.00001V9.00001C21.672 9.92049 20.9258 10.6667 20.0053 10.6667H3.33866C2.41819 10.6667 1.672 9.92049 1.672 9.00001V3.00001C1.672 2.07953 2.41819 1.33334 3.33866 1.33334ZM0.671997 3.00001C0.671997 1.52725 1.8659 0.333344 3.33866 0.333344H20.0053C21.4781 0.333344 22.672 1.52725 22.672 3.00001V9.00001C22.672 10.4728 21.4781 11.6667 20.0053 11.6667H3.33866C1.8659 11.6667 0.671997 10.4728 0.671997 9.00001V3.00001ZM25 6.00006C25 6.87319 24.4767 7.66128 23.6719 8.00006V4.00006C24.4767 4.33884 25 5.12693 25 6.00006Z" fill="black"/>
</svg>`;

const tabBarSvg = `<svg width="375" height="50" viewBox="0 0 375 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-inside-1_1481_24225" fill="white">
<path d="M0 0H375V50H0V0Z"/>
</mask>
<path d="M0 0H375V50H0V0Z" fill="white"/>
<path d="M375 49H0V51H375V49Z" fill="#EBF2FF" mask="url(#path-1-inside-1_1481_24225)"/>
<path d="M19.7607 21.3233H16V13.9941H19.5745C21.6531 13.9941 23.3352 15.6762 23.3352 17.7488C23.3352 19.7193 21.7312 21.3233 19.7607 21.3233Z" fill="#6229FF"/>
<path opacity="0.4" d="M23.3351 28.6766H16.0059V36.0058H23.3351V28.6766Z" fill="#6229FF"/>
<path opacity="0.8" d="M16.0059 21.3415H16.7808C20.3974 21.3415 23.3351 24.2792 23.3351 27.8958V28.6707H16.0059V21.3415Z" fill="#6229FF"/>
<path d="M37.9991 17.6769C37.9991 15.653 36.3584 14.0123 34.3345 14.0123C32.3106 14.0123 30.6699 15.653 30.6699 17.6769C30.6699 19.7008 32.3106 21.3415 34.3345 21.3415C36.3584 21.3415 37.9991 19.7008 37.9991 17.6769Z" fill="#0056FE"/>
<path opacity="0.8" d="M37.9991 21.3415H30.6699V28.6707H37.9991V21.3415Z" fill="#0056FE"/>
<path opacity="0.4" d="M27.1974 21.3415H30.6698V28.6707H23.3406V25.1984C23.3406 23.0717 25.0707 21.3415 27.1974 21.3415Z" fill="#0056FE"/>
<path opacity="0.4" d="M30.6706 28.6767H37.9998V36.0059H34.5214C32.3947 36.0059 30.6646 34.2817 30.6646 32.149V28.6707L30.6706 28.6767Z" fill="#0056FE"/>
<path d="M310 18.9C310 17.855 309.145 17 308.1 17H292.9C291.855 17 291 17.855 291 18.9V30.3C291 31.345 291.855 32.2 292.9 32.2H308.1C309.145 32.2 310 31.345 310 30.3V18.9ZM308.1 18.9L300.5 23.65L292.9 18.9H308.1ZM308.1 30.3H292.9V20.8L300.5 25.55L308.1 20.8V30.3Z" fill="#002B84"/>
<rect x="304" y="12.64" width="10" height="10" rx="5" fill="#DC362E"/>
<rect x="304" y="12.64" width="10" height="10" rx="5" stroke="white" stroke-width="2"/>
<path d="M341.664 34.36C342.654 34.36 343.464 33.5292 343.464 32.5138H339.864C339.864 33.5292 340.674 34.36 341.664 34.36ZM347.064 28.8215V24.2061C347.064 21.3723 345.597 19 343.014 18.3723V17.7446C343.014 16.9784 342.411 16.36 341.664 16.36C340.917 16.36 340.314 16.9784 340.314 17.7446V18.3723C337.74 19 336.264 21.3631 336.264 24.2061V28.8215L334.464 30.6677V31.5908H348.864V30.6677L347.064 28.8215ZM345.264 29.7446H338.064V24.2061C338.064 21.9169 339.423 20.0523 341.664 20.0523C343.905 20.0523 345.264 21.9169 345.264 24.2061V29.7446Z" fill="#002B84"/>
</svg>`;

const homeIcon = `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5882 8L6 17.5294H9.17647V26H15.5294V19.6471H17.6471V26H24V17.5294H27.1765L16.5882 8Z" fill="#0056FE"/>
</svg>`;

const serviceIcon = `<svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.945 22.7229L18.5106 15.2884C19.272 13.3725 18.879 11.1127 17.3315 9.55703C15.4484 7.67386 12.5172 7.50192 10.4293 9.02483L13.5734 12.1771L12.4107 13.3316L9.27483 10.1957C7.75192 12.2754 7.92386 15.2147 9.80703 17.0897C11.3299 18.6126 13.5488 19.0138 15.4484 18.3015L22.9074 25.7605C23.2267 26.0798 23.7425 26.0798 24.0618 25.7605L25.945 23.8773C26.2725 23.5662 26.2725 23.0504 25.945 22.7229ZM23.4887 24.0329L15.7431 16.2873C15.2437 16.6558 14.6869 16.8768 14.1056 16.9587C12.9921 17.1225 11.8212 16.7868 10.9697 15.9353C10.1919 15.1656 9.8316 14.134 9.88891 13.1187L12.4189 15.6487L15.8905 12.1771L13.3605 9.6471C14.3758 9.58978 15.3992 9.95004 16.1771 10.7197C17.0613 11.604 17.397 12.8239 17.1923 13.962C17.0941 14.5433 16.8485 15.0837 16.4718 15.5668L24.2092 23.3042L23.4887 24.0329Z" fill="#002B84"/>
</svg>`;

const chatsIcon = `<svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.1639 8.35999H10.7639C9.77387 8.35999 8.96387 9.16999 8.96387 10.16V26.36L12.5639 22.76H25.1639C26.1539 22.76 26.9639 21.95 26.9639 20.96V10.16C26.9639 9.16999 26.1539 8.35999 25.1639 8.35999ZM25.1639 20.96H12.5639L10.7639 22.76V10.16H25.1639V20.96Z" fill="#002B84"/>
</svg>`;

const paymentsIcon = `<svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27 8H9C7.75125 8 6.76125 9.00125 6.76125 10.25L6.75 23.75C6.75 24.9988 7.75125 26 9 26H27C28.2488 26 29.25 24.9988 29.25 23.75V10.25C29.25 9.00125 28.2488 8 27 8ZM27 23.75H9V17H27V23.75ZM27 12.5H9V10.25H27V12.5Z" fill="#002B84"/>
</svg>`;

const menuIcon = `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 26H30V23H5V26ZM5 18.5H30V15.5H5V18.5ZM5 8V11H30V8H5Z" fill="#002B84"/>
</svg>`;

export default function Layout() {
  const insets = useSafeAreaInsets();
  const pathname = usePathname();
  const router = useRouter();
  
  // Determine which tab is active
  const isHomeActive = pathname === '/';
  const isServiceActive = pathname === '/service';
  const isChatsActive = pathname === '/chats';
  const isPaymentsActive = pathname === '/payments';
  const isMenuActive = pathname === '/menu';
  
  // Helper function to get the text color based on active state
  const getTabTextColor = (isActive: any) => isActive ? '#0056FE' : '#B3B2B6';
  
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      
      {/* Top status bar area with logo and icons */}
      <SafeAreaView style={{ backgroundColor: 'white' }}>
        <View style={{ 
          height: 52, 
          paddingHorizontal: 20, 
          flexDirection: 'row', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          <SvgXml xml={htLogo} width={43} height={28} />
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <SvgXml xml={signalIcon} width={18} height={12} />
            <SvgXml xml={wifiIcon} width={16} height={12} />
            <View style={{ width: 24.33, height: 11.33 }}>
              <SvgXml xml={batteryIcon} width={25} height={12} />
              <View style={{ 
                width: 18, 
                height: 7.33, 
                left: 2, 
                top: 2, 
                position: 'absolute', 
                backgroundColor: 'black', 
                borderRadius: 1.33 
              }} />
            </View>
          </View>
        </View>
      </SafeAreaView>
      
      {/* Header with name */}
      <View style={{ 
        paddingHorizontal: 20, 
        paddingVertical: 12, 
        backgroundColor: 'rgba(255, 255, 255, 0.90)', 
        borderBottomWidth: 1, 
        borderBottomColor: '#EBF2FF',
      }}>
        <Text style={{ 
          textAlign: 'center', 
          color: '#706D74', 
          fontSize: 12, 
          fontFamily: 'Libre Franklin', 
          fontWeight: '400', 
          lineHeight: 16, 
          letterSpacing: 0.05 
        }}>
          Hey Name!
        </Text>
      </View>
      
      {/* Tab bar below header */}
      <SvgXml xml={tabBarSvg} width="100%" height={50} />
      
      {/* Main content area - This is where child routes will be rendered */}
      <View style={{ flex: 1 }}>
        <Slot />
      </View>
      
      {/* Bottom navigation */}
      <View style={{ 
        height: 61, 
        backgroundColor: 'rgba(255, 255, 255, 0.90)', 
        borderTopWidth: 1, 
        borderTopColor: '#EBF2FF', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        paddingHorizontal: 20 
      }}>
        <Pressable 
          style={{ alignItems: 'center', gap: 4 }}
          onPress={() => router.push('/')}
        >
          <SvgXml xml={homeIcon} width={34} height={34} />
          <Text style={{ 
            color: getTabTextColor(isHomeActive), 
            fontSize: 10, 
            fontFamily: 'Libre Franklin', 
            fontWeight: '500', 
            lineHeight: 14, 
            letterSpacing: 0.5 
          }}>
            Home
          </Text>
        </Pressable>
        
        <Pressable 
          style={{ alignItems: 'center', gap: 4 }}
          onPress={() => router.push('/(tabs)/service')}
        >
          <SvgXml xml={serviceIcon} width={35} height={34} />
          <Text style={{ 
            color: getTabTextColor(isServiceActive), 
            fontSize: 10, 
            fontFamily: 'Libre Franklin', 
            fontWeight: '500', 
            lineHeight: 14, 
            letterSpacing: 0.5 
          }}>
            Service
          </Text>
        </Pressable>
        
        <Pressable 
          style={{ alignItems: 'center', gap: 4 }}
          onPress={() => router.push('/(tabs)/chats')}
        >
          <SvgXml xml={chatsIcon} width={35} height={34} />
          <Text style={{ 
            color: getTabTextColor(isChatsActive), 
            fontSize: 10, 
            fontFamily: 'Libre Franklin', 
            fontWeight: '500', 
            lineHeight: 14, 
            letterSpacing: 0.5 
          }}>
            Chats
          </Text>
        </Pressable>
        
        <Pressable 
          style={{ alignItems: 'center', gap: 4 }}
          onPress={() => router.push('/(tabs)/payments')}
        >
          <SvgXml xml={paymentsIcon} width={35} height={34} />
          <Text style={{ 
            color: getTabTextColor(isPaymentsActive), 
            fontSize: 10, 
            fontFamily: 'Libre Franklin', 
            fontWeight: '500', 
            lineHeight: 14, 
            letterSpacing: 0.5 
          }}>
            Payments
          </Text>
        </Pressable>
        
        <Pressable 
          style={{ alignItems: 'center', gap: 4 }}
          onPress={() => router.push('/menu')}
        >
          <SvgXml xml={menuIcon} width={34} height={34} />
          <Text style={{ 
            color: getTabTextColor(isMenuActive), 
            fontSize: 10, 
            fontFamily: 'Libre Franklin', 
            fontWeight: '500', 
            lineHeight: 14, 
            letterSpacing: 0.5 
          }}>
            Menu
          </Text>
        </Pressable>
      </View>
      
      {/* Home indicator (for iPhones with notch) */}
      {Platform.OS === 'ios' && (
        <View style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.82)', 
          paddingTop: 14.5, 
          alignItems: 'center',
          paddingBottom: Math.max(8.5, insets.bottom)
        }}>
          <View style={{ 
            width: 135, 
            height: 5, 
            backgroundColor: 'black', 
            borderRadius: 100 
          }} />
        </View>
      )}
    </View>
  );
}

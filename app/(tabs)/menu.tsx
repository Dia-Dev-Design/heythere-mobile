import React from 'react';
import { View, ScrollView } from 'react-native';

export default function MenuScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ 
        paddingHorizontal: 20, 
        gap: 24, 
        paddingVertical: 24
      }}>
        {/* Profile/Account Section */}
        <View style={{ 
          paddingHorizontal: 16, 
          paddingVertical: 8, 
          backgroundColor: '#F8FAFF', 
          borderRadius: 4, 
          borderWidth: 1, 
          borderColor: '#EBF2FF', 
          flexDirection: 'row', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          <View style={{ 
            flexDirection: 'row', 
            alignItems: 'center', 
            gap: 16 
          }}>
            <View style={{ 
              paddingHorizontal: 14, 
              paddingVertical: 11, 
              backgroundColor: '#B8D0FF', 
              borderRadius: 17.5, 
              borderWidth: 1, 
              borderColor: '#A3C2FF', 
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: 8, 
              width: 35, // Assumed width
              height: 35 // Assumed height
            }} />
            
            <View style={{ 
              flexDirection: 'row', 
              alignItems: 'center', 
              gap: 16,
              width: 100 // Assumed width for spacing
            }} />
          </View>
          
          <View style={{ 
            flexDirection: 'row', 
            alignItems: 'center', 
            gap: 16,
            width: 20 // Assumed width
          }} />
          
          <View style={{ 
            alignItems: 'flex-end', 
            gap: 16 
          }}>
            <View style={{ 
              width: 24, // Assumed icon width
              height: 24, // Assumed icon height
              backgroundColor: '#002B84' 
            }} />
          </View>
        </View>
        
        {/* Spacer/Divider */}
        <View style={{ 
          paddingLeft: 8, 
          flexDirection: 'row', 
          alignItems: 'center', 
          gap: 8 
        }}>
          <View style={{ 
            opacity: 0, 
            width: 20, // Assumed width
            height: 2, // Assumed height
            backgroundColor: '#B3B2B6' 
          }} />
        </View>
        
        {/* First Menu Section */}
        <View style={{ 
          gap: 8 
        }}>
          <View style={{ 
            padding: 8, 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            alignItems: 'center' 
          }}>
            <View style={{ 
              flexDirection: 'row', 
              alignItems: 'center', 
              gap: 8 
            }}>
              <View style={{ 
                width: 24, // Assumed icon width
                height: 24, // Assumed icon height
                backgroundColor: '#002B84' 
              }} />
            </View>
          </View>
          
          <View style={{ 
            paddingLeft: 32, 
            gap: 8 
          }}>
            {[1, 2, 3, 4].map((_, index) => (
              <View key={`section1-item-${index}`} style={{ 
                paddingHorizontal: 8, 
                paddingVertical: 12, 
                borderRadius: 999, 
                flexDirection: 'row', 
                alignItems: 'center', 
                gap: 8,
                height: 40 // Assumed height
              }} />
            ))}
          </View>
        </View>
        
        {/* Second Menu Section */}
        <View style={{ 
          gap: 8 
        }}>
          <View style={{ 
            padding: 8, 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            alignItems: 'center' 
          }}>
            <View style={{ 
              flexDirection: 'row', 
              alignItems: 'center', 
              gap: 8 
            }}>
              <View style={{ 
                width: 24, // Assumed icon width
                height: 24, // Assumed icon height
                backgroundColor: '#002B84' 
              }} />
            </View>
          </View>
          
          <View style={{ 
            paddingLeft: 32, 
            gap: 4 
          }}>
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <View key={`section2-item-${index}`} style={{ 
                paddingHorizontal: 8, 
                paddingVertical: 12, 
                borderRadius: 999, 
                flexDirection: 'row', 
                alignItems: 'center', 
                gap: 8,
                height: 40 // Assumed height
              }} />
            ))}
          </View>
        </View>
        
        {/* Third Menu Section */}
        <View style={{ 
          gap: 8 
        }}>
          <View style={{ 
            padding: 8, 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            alignItems: 'center' 
          }}>
            <View style={{ 
              flexDirection: 'row', 
              alignItems: 'center', 
              gap: 8 
            }}>
              <View style={{ 
                width: 24, // Assumed icon width
                height: 24, // Assumed icon height
                backgroundColor: '#002B84' 
              }} />
            </View>
          </View>
          
          <View style={{ 
            paddingLeft: 32, 
            gap: 8 
          }}>
            {[1, 2, 3, 4].map((_, index) => (
              <View key={`section3-item-${index}`} style={{ 
                paddingHorizontal: 8, 
                paddingVertical: 12, 
                borderRadius: 999, 
                flexDirection: 'row', 
                alignItems: 'center', 
                gap: 8,
                height: 40 // Assumed height
              }} />
            ))}
          </View>
        </View>
        
        {/* Fourth Menu Section */}
        <View style={{ 
          gap: 8 
        }}>
          <View style={{ 
            padding: 8, 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            alignItems: 'center' 
          }}>
            <View style={{ 
              flexDirection: 'row', 
              alignItems: 'center', 
              gap: 8 
            }}>
              <View style={{ 
                width: 24, // Assumed icon width
                height: 24, // Assumed icon height
                backgroundColor: '#002B84' 
              }} />
            </View>
          </View>
          
          <View style={{ 
            paddingLeft: 32, 
            gap: 8 
          }}>
            {[1, 2].map((_, index) => (
              <View key={`section4-item-${index}`} style={{ 
                paddingHorizontal: 8, 
                paddingVertical: 12, 
                borderRadius: 999, 
                flexDirection: 'row', 
                alignItems: 'center', 
                gap: 8,
                height: 40 // Assumed height
              }} />
            ))}
          </View>
        </View>
        
        {/* Standalone Menu Item 1 */}
        <View style={{ 
          padding: 8, 
          flexDirection: 'row', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          <View style={{ 
            flexDirection: 'row', 
            alignItems: 'center', 
            gap: 8 
          }}>
            <View style={{ 
              width: 24, // Assumed icon width
              height: 24, // Assumed icon height
              backgroundColor: '#002B84' 
            }} />
          </View>
          
          <View style={{ 
            opacity: 0, 
            flexDirection: 'row', 
            justifyContent: 'flex-end', 
            alignItems: 'center', 
            gap: 8 
          }}>
            <View style={{ 
              width: 16, // Assumed width
              height: 16, // Assumed height
              backgroundColor: '#EBF2FF', 
              borderRadius: 9999 
            }} />
          </View>
        </View>
        
        {/* Standalone Menu Item 2 */}
        <View style={{ 
          padding: 8, 
          flexDirection: 'row', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          <View style={{ 
            flexDirection: 'row', 
            alignItems: 'center', 
            gap: 8 
          }}>
            <View style={{ 
              width: 24, // Assumed icon width
              height: 24, // Assumed icon height
              backgroundColor: '#002B84' 
            }} />
          </View>
          
          <View style={{ 
            opacity: 0, 
            flexDirection: 'row', 
            justifyContent: 'flex-end', 
            alignItems: 'center', 
            gap: 8 
          }}>
            <View style={{ 
              width: 16, // Assumed width
              height: 16, // Assumed height
              backgroundColor: '#EBF2FF', 
              borderRadius: 9999 
            }} />
          </View>
        </View>
        
        {/* Action Buttons Section */}
        <View style={{ 
          gap: 24 
        }}>
          {/* First Action Button */}
          <View style={{ 
            padding: 8, 
            backgroundColor: '#EBF2FF', 
            borderRadius: 999, 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            alignItems: 'center' 
          }}>
            <View style={{ 
              flexDirection: 'row', 
              alignItems: 'center', 
              gap: 8 
            }}>
              <View style={{ 
                width: 24, // Assumed icon width
                height: 24, // Assumed icon height
                backgroundColor: '#002B84' 
              }} />
            </View>
            
            <View style={{ 
              opacity: 0, 
              flexDirection: 'row', 
              justifyContent: 'flex-end', 
              alignItems: 'center', 
              gap: 8 
            }}>
              <View style={{ 
                width: 16, // Assumed width
                height: 16, // Assumed height
                backgroundColor: '#EBF2FF', 
                borderRadius: 9999 
              }} />
            </View>
          </View>
          
          {/* Second Action Button */}
          <View style={{ 
            padding: 8, 
            backgroundColor: '#EBF2FF', 
            borderRadius: 999, 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            alignItems: 'center' 
          }}>
            <View style={{ 
              flexDirection: 'row', 
              alignItems: 'center', 
              gap: 8 
            }}>
              <View style={{ 
                width: 24, // Assumed icon width
                height: 24, // Assumed icon height
                backgroundColor: '#002B84' 
              }} />
            </View>
            
            <View style={{ 
              opacity: 0, 
              flexDirection: 'row', 
              justifyContent: 'flex-end', 
              alignItems: 'center', 
              gap: 8 
            }}>
              <View style={{ 
                width: 16, // Assumed width
                height: 16, // Assumed height
                backgroundColor: '#EBF2FF', 
                borderRadius: 9999 
              }} />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
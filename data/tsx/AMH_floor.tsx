<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.9" tiledversion="1.9.1" name="AMH_floor" tilewidth="64" tileheight="64" tilecount="128" columns="16">
 <image source="AMH_floor.png" width="1024" height="512"/>
 <tile id="1" probability="0.2"/>
 <tile id="2" probability="0.5"/>
 <tile id="3" probability="0.2"/>
 <tile id="4" probability="0.2"/>
 <tile id="16" probability="0.2"/>
 <tile id="17" probability="0.5"/>
 <tile id="32" probability="0.2"/>
 <tile id="33" probability="0.5"/>
 <tile id="64" probability="0.2"/>
 <tile id="65" probability="0.2"/>
 <tile id="66" probability="0.2"/>
 <tile id="67" probability="0.2"/>
 <wangsets>
  <wangset name="simple path" type="edge" tile="-1">
   <wangcolor name="path" color="#ff0000" tile="-1" probability="1"/>
   <wangtile tileid="16" wangid="0,0,1,0,0,0,1,0"/>
   <wangtile tileid="17" wangid="0,0,1,0,0,0,1,0"/>
   <wangtile tileid="18" wangid="0,0,1,0,0,0,1,0"/>
   <wangtile tileid="19" wangid="0,0,1,0,1,0,0,0"/>
   <wangtile tileid="20" wangid="0,0,0,0,1,0,1,0"/>
   <wangtile tileid="32" wangid="1,0,0,0,1,0,0,0"/>
   <wangtile tileid="33" wangid="1,0,0,0,1,0,0,0"/>
   <wangtile tileid="34" wangid="1,0,0,0,1,0,0,0"/>
   <wangtile tileid="35" wangid="1,0,1,0,0,0,0,0"/>
   <wangtile tileid="36" wangid="1,0,0,0,0,0,1,0"/>
   <wangtile tileid="48" wangid="0,0,0,0,0,0,1,0"/>
   <wangtile tileid="49" wangid="0,0,1,0,0,0,0,0"/>
   <wangtile tileid="50" wangid="1,0,0,0,0,0,0,0"/>
   <wangtile tileid="51" wangid="0,0,0,0,1,0,0,0"/>
   <wangtile tileid="52" wangid="1,0,1,0,1,0,1,0"/>
   <wangtile tileid="64" wangid="0,0,0,0,0,0,1,0"/>
   <wangtile tileid="65" wangid="0,0,1,0,0,0,0,0"/>
   <wangtile tileid="66" wangid="1,0,0,0,0,0,0,0"/>
   <wangtile tileid="67" wangid="1,0,0,0,0,0,0,0"/>
  </wangset>
  <wangset name="double path" type="mixed" tile="-1">
   <wangcolor name="path" color="#ff0000" tile="-1" probability="1"/>
   <wangcolor name="grass" color="#00ff00" tile="-1" probability="1"/>
   <wangtile tileid="0" wangid="2,2,2,2,2,2,2,2"/>
   <wangtile tileid="1" wangid="2,2,2,2,2,2,2,2"/>
   <wangtile tileid="2" wangid="2,2,2,2,2,2,2,2"/>
   <wangtile tileid="3" wangid="2,2,2,2,2,2,2,2"/>
   <wangtile tileid="4" wangid="2,2,2,2,2,2,2,2"/>
   <wangtile tileid="6" wangid="2,2,1,1,1,2,2,2"/>
   <wangtile tileid="7" wangid="2,2,2,2,1,1,1,2"/>
   <wangtile tileid="8" wangid="1,1,1,1,1,2,2,2"/>
   <wangtile tileid="9" wangid="2,2,1,1,1,1,1,2"/>
   <wangtile tileid="10" wangid="1,1,1,2,1,1,1,1"/>
   <wangtile tileid="11" wangid="1,0,1,1,1,2,1,1"/>
   <wangtile tileid="22" wangid="1,1,1,2,2,2,2,2"/>
   <wangtile tileid="23" wangid="1,2,2,2,2,2,1,1"/>
   <wangtile tileid="24" wangid="1,2,2,2,1,1,1,1"/>
   <wangtile tileid="25" wangid="1,1,1,2,2,2,1,1"/>
   <wangtile tileid="26" wangid="1,2,1,1,1,1,1,1"/>
   <wangtile tileid="27" wangid="1,1,1,0,1,1,1,2"/>
   <wangtile tileid="29" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="42" wangid="1,2,1,1,1,2,1,1"/>
   <wangtile tileid="43" wangid="1,1,1,2,1,1,1,2"/>
  </wangset>
 </wangsets>
</tileset>

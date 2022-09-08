<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.9" tiledversion="1.9.1" name="AMH_floor" tilewidth="64" tileheight="64" tilecount="216" columns="18">
 <image source="../../graphics/tilemap/AMH_floor.png" width="1152" height="768"/>
 <tile id="1" probability="0.2"/>
 <tile id="2" probability="0.5"/>
 <tile id="3" probability="0.2"/>
 <tile id="4" probability="0.1"/>
 <tile id="5" probability="0.2"/>
 <tile id="18" probability="0.2"/>
 <tile id="19" probability="0.5"/>
 <tile id="23" probability="2"/>
 <tile id="36" probability="0.2"/>
 <tile id="37" probability="0.5"/>
 <tile id="59" probability="0.1"/>
 <tile id="60" probability="0.1"/>
 <tile id="72" probability="0.2"/>
 <tile id="73" probability="0.2"/>
 <tile id="74" probability="0.2"/>
 <tile id="75" probability="0.2"/>
 <tile id="80" probability="0.2"/>
 <tile id="81" probability="0.5"/>
 <tile id="82" probability="0.3"/>
 <tile id="98" probability="0.2"/>
 <tile id="99" probability="0.2"/>
 <tile id="100" probability="0.3"/>
 <tile id="127" probability="0.5"/>
 <tile id="167" probability="0.1"/>
 <tile id="168" probability="0.1"/>
 <tile id="188" probability="0.2"/>
 <tile id="189" probability="0.5"/>
 <tile id="190" probability="0.3"/>
 <tile id="206" probability="0.2"/>
 <tile id="207" probability="0.2"/>
 <tile id="208" probability="0.3"/>
 <wangsets>
  <wangset name="simple path" type="edge" tile="-1">
   <wangcolor name="path" color="#ff0000" tile="-1" probability="1"/>
   <wangtile tileid="3" wangid="0,0,0,0,1,0,0,0"/>
   <wangtile tileid="7" wangid="0,0,1,0,1,0,0,0"/>
   <wangtile tileid="8" wangid="0,0,0,0,1,0,1,0"/>
   <wangtile tileid="9" wangid="0,0,1,0,1,0,1,0"/>
   <wangtile tileid="10" wangid="1,0,1,0,1,0,0,0"/>
   <wangtile tileid="21" wangid="1,0,0,0,1,0,0,0"/>
   <wangtile tileid="25" wangid="1,0,1,0,0,0,0,0"/>
   <wangtile tileid="26" wangid="1,0,0,0,0,0,1,0"/>
   <wangtile tileid="27" wangid="1,0,1,0,0,0,1,0"/>
   <wangtile tileid="28" wangid="1,0,0,0,1,0,1,0"/>
   <wangtile tileid="39" wangid="1,0,0,0,0,0,0,0"/>
   <wangtile tileid="54" wangid="0,0,1,0,0,0,0,0"/>
   <wangtile tileid="55" wangid="0,0,1,0,0,0,1,0"/>
   <wangtile tileid="56" wangid="0,0,0,0,0,0,1,0"/>
   <wangtile tileid="58" wangid="1,0,1,0,1,0,1,0"/>
   <wangtile tileid="82" wangid="0,0,1,0,0,0,1,0"/>
   <wangtile tileid="100" wangid="1,0,0,0,1,0,0,0"/>
  </wangset>
  <wangset name="dirt" type="corner" tile="-1">
   <wangcolor name="path" color="#ff0000" tile="-1" probability="1"/>
   <wangcolor name="grass" color="#00ff00" tile="-1" probability="1"/>
   <wangtile tileid="0" wangid="0,2,0,1,0,2,0,2"/>
   <wangtile tileid="1" wangid="0,2,0,1,0,1,0,2"/>
   <wangtile tileid="2" wangid="0,2,0,2,0,1,0,2"/>
   <wangtile tileid="4" wangid="0,1,0,2,0,1,0,1"/>
   <wangtile tileid="6" wangid="0,1,0,1,0,2,0,1"/>
   <wangtile tileid="18" wangid="0,1,0,1,0,2,0,2"/>
   <wangtile tileid="19" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="20" wangid="0,2,0,2,0,1,0,1"/>
   <wangtile tileid="23" wangid="0,2,0,2,0,2,0,2"/>
   <wangtile tileid="36" wangid="0,1,0,2,0,2,0,2"/>
   <wangtile tileid="37" wangid="0,1,0,2,0,2,0,1"/>
   <wangtile tileid="38" wangid="0,2,0,2,0,2,0,1"/>
   <wangtile tileid="40" wangid="0,2,0,1,0,1,0,1"/>
   <wangtile tileid="42" wangid="0,1,0,1,0,1,0,2"/>
   <wangtile tileid="59" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="60" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="80" wangid="0,2,0,2,0,2,0,2"/>
   <wangtile tileid="81" wangid="0,2,0,2,0,2,0,2"/>
   <wangtile tileid="98" wangid="0,2,0,2,0,2,0,2"/>
   <wangtile tileid="99" wangid="0,2,0,2,0,2,0,2"/>
  </wangset>
  <wangset name="desert simple path" type="edge" tile="-1">
   <wangcolor name="path" color="#ff0000" tile="-1" probability="1"/>
   <wangtile tileid="111" wangid="0,0,0,0,1,0,0,0"/>
   <wangtile tileid="115" wangid="0,0,1,0,1,0,0,0"/>
   <wangtile tileid="116" wangid="0,0,0,0,1,0,1,0"/>
   <wangtile tileid="117" wangid="0,0,1,0,1,0,1,0"/>
   <wangtile tileid="118" wangid="1,0,1,0,1,0,0,0"/>
   <wangtile tileid="129" wangid="1,0,0,0,1,0,0,0"/>
   <wangtile tileid="133" wangid="1,0,1,0,0,0,0,0"/>
   <wangtile tileid="134" wangid="1,0,0,0,0,0,1,0"/>
   <wangtile tileid="135" wangid="1,0,1,0,0,0,1,0"/>
   <wangtile tileid="136" wangid="1,0,0,0,1,0,1,0"/>
   <wangtile tileid="147" wangid="1,0,0,0,0,0,0,0"/>
   <wangtile tileid="162" wangid="0,0,1,0,0,0,0,0"/>
   <wangtile tileid="163" wangid="0,0,1,0,0,0,1,0"/>
   <wangtile tileid="164" wangid="0,0,0,0,0,0,1,0"/>
   <wangtile tileid="166" wangid="1,0,1,0,1,0,1,0"/>
   <wangtile tileid="190" wangid="0,0,1,0,0,0,1,0"/>
   <wangtile tileid="208" wangid="1,0,0,0,1,0,0,0"/>
  </wangset>
  <wangset name="desert" type="corner" tile="-1">
   <wangcolor name="path" color="#ff0000" tile="-1" probability="1"/>
   <wangcolor name="sand" color="#00ff00" tile="-1" probability="1"/>
   <wangtile tileid="108" wangid="0,2,0,1,0,2,0,2"/>
   <wangtile tileid="109" wangid="0,2,0,1,0,1,0,2"/>
   <wangtile tileid="110" wangid="0,2,0,2,0,1,0,2"/>
   <wangtile tileid="112" wangid="0,1,0,2,0,1,0,1"/>
   <wangtile tileid="114" wangid="0,1,0,1,0,2,0,1"/>
   <wangtile tileid="126" wangid="0,1,0,1,0,2,0,2"/>
   <wangtile tileid="127" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="128" wangid="0,2,0,2,0,1,0,1"/>
   <wangtile tileid="131" wangid="0,2,0,2,0,2,0,2"/>
   <wangtile tileid="144" wangid="0,1,0,2,0,2,0,2"/>
   <wangtile tileid="145" wangid="0,1,0,2,0,2,0,1"/>
   <wangtile tileid="146" wangid="0,2,0,2,0,2,0,1"/>
   <wangtile tileid="148" wangid="0,2,0,1,0,1,0,1"/>
   <wangtile tileid="150" wangid="0,1,0,1,0,1,0,2"/>
   <wangtile tileid="167" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="168" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="188" wangid="0,2,0,2,0,2,0,2"/>
   <wangtile tileid="189" wangid="0,2,0,2,0,2,0,2"/>
   <wangtile tileid="206" wangid="0,2,0,2,0,2,0,2"/>
   <wangtile tileid="207" wangid="0,2,0,2,0,2,0,2"/>
  </wangset>
 </wangsets>
</tileset>


  
function update(activeAnchor) {
    var group = activeAnchor.getParent();

    var topLeft = group.find('.topLeft')[0];
    var topRight = group.find('.topRight')[0];
    var bottomRight = group.find('.bottomRight')[0];
    var bottomLeft = group.find('.bottomLeft')[0];
    var image = group.find('.image')[0];

    var anchorX = activeAnchor.x();
    var anchorY = activeAnchor.y();

    // update anchor positions
    switch (activeAnchor.name()) {
        case 'topLeft':
            topRight.y(anchorY);
            bottomLeft.x(anchorX);
            break;
        case 'topRight':
            topLeft.y(anchorY);
            bottomRight.x(anchorX);
            break;
        case 'bottomRight':
            bottomLeft.y(anchorY);
            topRight.x(anchorX);
            break;
        case 'bottomLeft':
            bottomRight.y(anchorY);
            topLeft.x(anchorX);
            break;
    }

    image.setPosition(topLeft.getPosition());

    var width = topRight.x() - topLeft.x();
    var height = bottomLeft.y() - topLeft.y();
    if (width && height) {
        image.setSize({
            width: width,
            height: height
        });
    }
}

function addAnchor(group, x, y, name) {
    var stage = group.getStage();
    var layer = group.getLayer();

    var anchor = new Kinetic.Circle({
        x: x,
        y: y,
        stroke: '#666',
        fill: '#ddd',
        strokeWidth: 2,
        radius: 8,
        name: name,
        draggable: true,
        dragOnTop: false,
        opacity: .01
    });



    anchor.on('mouseout', function () {
        this.opacity(.01);
        layer.draw()
    });
    anchor.on('mouseenter', function () {
        this.opacity(1.00);
        layer.draw()
    });

    anchor.on('dragmove', function () {
        update(this);
        layer.draw();
    });
    anchor.on('mousedown touchstart', function () {
        group.setDraggable(false);
        this.moveToTop();
    });
    anchor.on('dragend', function () {
        group.setDraggable(true);
        layer.draw();
    });
    // add hover styling
    anchor.on('mouseover', function () {
        var layer = this.getLayer();
        document.body.style.cursor = 'pointer';
        this.setStrokeWidth(4);
        layer.draw();
    });
    anchor.on('mouseout', function () {
        var layer = this.getLayer();
        document.body.style.cursor = 'default';
        this.strokeWidth(2);
        layer.draw();
    });

    group.add(anchor);
}

function loadImages(sources, callback) {
    var images = {};
    var loadedImages = 0;
    var numImages = 0;
    for (var src in sources) {
        numImages++;
    }



    for (var src in sources) {
        images[src] = new Image();
        images[src].onload = function () {
            if (++loadedImages >= numImages) {
                callback(images);
            }
        };
        images[src].src = sources[src];
    }
}










var sources = {
controlre: 'http://images2.layoutsparks.com/1/33247/victorian-grey-background-pattern.jpg',
wi1a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/light4_zpsee582486.png',
  wi1b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/med4_zpsd327f19f.png',
  wi1c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/dark4_zpsf6ec9ae5.png',
 wi2a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/light5_zps17996123.png',
  wi2b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/med5_zpsfe431561.png',
  wi2c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/dark5_zpsf099a0bf.png',
 wi3a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/light3_zps99eddb33.png',
  wi3b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/med3_zpsb52dea40.png',
  wi3c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/dark3_zpsdda4dbda.png',
 wi4a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/light1_zps0d0aaa7e.png',
  wi4b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/med1_zpse3947058.png',
  wi4c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/dark1_zpscdd30684.png',
 wi5a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/light2_zps92f42c65.png',
 wi5b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/med2_zpsaf980075.png',
 wi5c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/dark2_zps0df80cda.png',
wi6a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/window_1_zps98f51952.png',
wi6b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/window_12_zpsdd6910af.png',
wi6c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/window_123_zps8c716ebd.png',
 wi7a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/redvelvetcurtains-125_zps5c0b8fe3.png',
 wi7b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/redvelvetcurtains-12523_zps56c06d28.png',
 wi7c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/redvelvetcurtains-1252_zps579528f3.png',
 wi8a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/sheerlimecurtain_zpsb2080a97.png',
 wi8b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/sheerlimecurtain23_zps6858e929.png',
 wi8c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/sheerlimecurtain2_zps08072aff.png',
 wi9: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/exteri10_zps4b459824.png',
 wi10: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/window10_zps82a9fae8.png',
 wi11: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/societ11_zps0b444fae.png',
 wi12: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/phantom2_zps156227ef.png',
 wi13: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/mirror10_zps6f35aebe.png',
 wi14: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/maniacsmile4_zpsdca7c660.png',
 wi15: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/kelbe_giraffies_2png_zpsfb4b416f.png',
 wi16: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/chisignposter_zps203f1f30.png',
 wi17: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/Clock-icon_zps7a29537a.png',
 wi18: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/glass_wall_art-20_zps02f6e4e3.png',
 wi19: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/duskwindow_zps194cd70b.png',
 wi20: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/freegi10_zps7ed9e3d6.png',
ta1a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/table_10_zpsbd3139c7.png',
  ta1b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/table_1023_zpsf045ac17.png',
  ta1c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/table_102_zpsd447dadf.png',
 ta2a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/sweet_table_zps8da7a92e.png',
  ta2b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/sweet_table2_zps4728ddd3.png',
  ta2c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/sweet_table23_zpsa508c91e.png',
 ta3a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/siteba13_zpsdcded841.png',
  ta3b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/siteba132_zps249f865d.png',
  ta3c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/siteba1323_zps9254ede6.png',
 ta4a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/marble10_zpse1288052.png',
  ta4b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/marble102_zps0be4f28f.png',
  ta4c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/marble1023_zps22ea556e.png',
 ta5a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/sidetable_zps249356a9.png',
 ta5b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/sidetable3_zps2d575bc1.png',
 ta5c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/sidetable2_zpsb0230ec4.png',
ta6a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/sdf_zpsd20e6fb6.png',
ta6b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/sdf2_zps368b51cd.png',
ta6c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/sdf23_zpse70a414c.png',
 ta7: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/80-silvertable_zps3c98491e.png',
 ta8: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/100_zps3cc8fb5b.png',
 ta9: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/table110_zpsd65ba4c7.png',
 ta10: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/table610_zps921e0fda.png',
 ta11: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/kelbe_boutique_sm_table_zps80e69d9f.png',
 ta12: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/end_ta10_zps3873f06c.png',
li1a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/1-angelinamc22_zps60d44e0a.png',
  li1b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/1-angelinamc222_zpsbe72e5eb.png',
  li1c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/1-angelinamc2223_zps81170d7e.png',
 li2a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/blueamp_zps3a62ab71.png',
  li2b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/blueamp3_zpsc06357ab.png',
  li2c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/blueamp34_zps908a1dc2.png',
 li3a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/sweet_lamp_zpsb450fe53.png',
  li3b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/sweet_lamp23_zpsa551666a.png',
  li3c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/sweet_lamp2_zps3981ac4a.png',
 li4a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/green_lamp_zpsc423f350.png',
  li4b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/green_lamp2_zps6a6ef2dc.png',
  li4c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/green_lamp23_zps055bc54a.png',
 li5a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/candle10_zps7f2273f4.png',
 li5b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/candle11_zps46673b52.png',
 li5c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/candle112_zps78cf3110.png',
li6: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/lamp_210_zps305a7450.png',
 li7: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/lamp_310_zpsaa229972.png',
 li8: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/kelbe_boutique_lamp_zps1a32aad6.png',
 li9: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/maniacsmile3_zps8635ffce.png',
 li10: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/chandelier_zps72205b5a.png',
 li11: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/50-trio_spotlights_zpsa2daf7c5.png',
 li12: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/mens_l10_zps30302dac.png',
 li13: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/light_zps1991ca16.png',
el1a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/spotlightvanity-200_zps266cc40f.png',
  el1b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/spotlightvanity-20023_zps82172876.png',
  el1c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/spotlightvanity-2002_zps0116daf9.png',
 el2a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/shelli-2_zpsc14ff7ed.png',
  el2b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/shelli-223_zpsb21e4d1b.png',
  el2c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/shelli-22_zps22732ae7.png',
 el3a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/lamp_911_zps78519b11.png',
  el3b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/lamp_9112_zpse1577e81.png',
  el3c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/lamp_91123_zpsd2e6e1f2.png',
 el4a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/chairb10_zps4813f540.png',
  el4b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/chairb102_zps1d8143d1.png',
  el4c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/chairb1023_zpsa6d1db7b.png',
 el5a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/chair_10_zpsb765ae1e.png',
el5b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/chair_102_zps1ad4cd17.png',
el5c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/chair_1023_zpsa71b5369.png',
el6: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/chalk1_zpse80ee647.png',
 el7: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/checke10_zps1fa4926a.png',
 el8: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/lamp_p12_zpscc54c93b.png',
 el9: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/lamp_110_zpsfa7280a7.png',
 el10: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/phone-2-2_zpsd89093cd.png',
 el11: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/floor310_zpsc83c4530.png',
 el12: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/floori12_zps25d62231.png',
 el13: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/floori17_zps5bc21105.png',
   el14: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/design11_zpsf5816775.jpg',
   el15: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/btq_cr10_zpsa45d79ea.jpg',
   ma1a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/50-NudeSilverBust_zps3007f22e.png',
  ma1b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/50-NudeSilverBust23_zpsa3d449cf.png',
  ma1c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/50-NudeSilverBust2_zps11dfb184.png',
 ma2a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/for_me10_zpsce128ac0.png',
  ma2b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/for_me1023_zpsa7e87733.png',
  ma2c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/for_me102_zps68ea8532.png',
 ma3a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/hanger10_zps388bdf01.png',
  ma3b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/hanger102_zpse8533e0b.png',
  ma3c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/hanger1023_zps4e77384c.png',
 ma4a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/shelf102_zps4897c6f2.png',
  ma4b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/shelf1023_zps67e2ec2a.png',
  ma4c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/shelf10_zpsa0c6941d.png',
 ma5: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/shelf211_zps8bd016b6.png',
ma6: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/manniq11_zps099a1294.png',
 ma7: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/manniq10_zps2514c7c5.png',
 ma8: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/maniqu10_zps4c1588bd.png',
 ma9: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/for_me11_zps31726ac8.png',
 ma10: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/halfma10_zpseb9665f8.png',
 ma11: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/half_m10_zps10bd83f4.png',
 ma12: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/clothi11_zpsc5e11761.png',
 ma13: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/pujarishriya_zpsccf08e5f.png',
de1a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/sign3_zpsa09216d8.png',
  de1b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/sign32_zps69f38804.png',
  de1c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/sign323_zps36af417d.png',
 de2a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/closepresent2grey_zps908a609e.png',
  de2b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/closepresent2grey23_zps397610e1.png',
  de2c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/closepresent2grey2_zps20fb3c8f.png',
 de3a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/kelbe_pot_2_zpsf5ee09fd.png',
  de3b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/kelbe_pot_22_zpsf4c0b91e.png',
  de3c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/kelbe_pot_223_zps5801f101.png',
 de4a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/jackpot2s_zps2d4ea051.png',
  de4b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/jackpot2s23_zpsfc61fda0.png',
  de4c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/jackpot2s2_zps2db08999.png',
 de5: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/vase110_zps5555d538.png',
  de6: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/kelbeplant_box_zps68e73e7f.png',
 de7: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/shelli_17_zps334e057d.png',
  de8: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/kelbe_plant2_zps74dea3af.png',
   de9: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/planter-30_zps318d6e67.png',
 de10: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/vase10_zps554d8e02.png',
  de11: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/mirror11_zpse8d29589.png',
 de12: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/angelinamc21_zps9a985da4.png',
   de13: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/rug_fo10_zpscf033cd9.png',
   de14: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/srrack11121_zps19a2dbf5.png',
   de15: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/clothi10_zps25714644.png',
   de16: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/25_zpsfff66a8a.png',
co1a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/wu08b6_zps116ded46.png',
  co1b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/wu08b62_zps7aaf4ee9.png',
  co1c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/wu08b63_zpsd6988234.png',
 co2a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/tammy-2_zps65292619.png',
  co2b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/tammy-22_zps8652dc27.png',
  co2c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/tammy-223_zpscfe82c47.png',
 co3a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/sonjas-2_zps425cafeb.png',
  co3b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/sonjas-22_zps5a79e961.png',
  co3c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/sonjas-223_zps861c3434.png',
 co4a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/sea_ge10_zps25fba58c.png',
  co4b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/sea_ge103_zpse67c03ab.png',
  co4c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/sea_ge1033_zps2c16cedb.png',
 co5a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/kelbe_sofa_settask_zps0efb913b.png',
  co5b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/kelbe_sofa_settask23_zpsa20bfa9b.png',
  co5c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/kelbe_sofa_settask2_zpsfd0956ff.png',
 co6a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/pinbackingloveseat-100_zps378e7cce.png',
  co6b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/pinbackingloveseat-10023_zpsb36b21a0.png',
  co6c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/pinbackingloveseat-1002_zps96542eb4.png',
 co7a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/light_11_zpseeb9c4ba.png',
  co7b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/light_112_zpsa17b5c20.png',
  co7c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/light_1123_zps9f3efb1e.png',
 co8a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/kelbe_brownsofa2_zps0a8c3df5.png',
  co8b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/kelbe_brownsofa_zpsff0f5ef8.png',
  co8c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/kelbe_brownsofa23_zps9c7f4eb9.png',
 co9a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/angelinamc-2_zps1b246210.png',
  co9b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/angelinamc-22_zps16f8eaac.png',
  co9c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/angelinamc-223_zps5b8e74fe.png',
 co10a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/lounge10_zps43190cd2.png',
  co10b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/lounge102_zps07156b20.png',
  co10c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/lounge1023_zps585b487b.png',
 co11a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/couch_10_zpsdfcbef9f.png',
  co11b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/couch_11_zps40802303.png',
  co11c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/couch_103_zps08ff13fe.png',
 co12: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/blackf10_zps3ac9d1b8.png',
  co13: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/2002_zps2735946d.png',
  co14: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/kelbe_brown_chaise_zpsdeafb976.png',
 ch1a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/sweetshellifurni_zps36eeded4.png',
  ch1b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/sweetshellifurni-2_zpsf7b36ef2.png',
  ch1c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/sweetshellifurni-3_zps9ab8a0b1.png',
 ch2a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/siteba112_zpsba3553cf.png',
  ch2b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/siteba11_zpsa9bd9b6a.png',
  ch2c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/siteba113_zpsb2d66f8a.png',
 ch3a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/table310_zpsb7bb3d33.png',
  ch3b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/table310-3_zps3c158d8c.png',
  ch3c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/table310-2_zps442339c4.png',
 ch4a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/kelbe_man_chair_zps4934c466.png',
  ch4b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/kelbe_man_chair2_zps988050de.png',
  ch4c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/kelbe_man_chair3_zps522def62.png',
 ch5a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/pink_chair_zpsf1f44a09.png',
  ch5b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/pink_chair2_zps2faad011.png',
  ch5c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/pink_chair3_zpse4900901.png',
 ch6a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/kelbe_2boutiquechair_zps898aad59.png',
  ch6b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/kelbe_2boutiquechair3_zps5919dab5.png',
  ch6c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/kelbe_2boutiquechair2_zps3da6bebb.png',
 ch7a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/chairs2d_zpsd7cbbbad.png',
  ch7b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/chairs2d3_zps7035f645.png',
  ch7c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/chairs2d2_zps01f44d4f.png',
 ch8a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/kelbedining_tsk_zps445866f7.png',
  ch8b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/kelbedining_tsk2_zps433e95fa.png',
  ch8c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/kelbedining_tsk3_zps728a9e16.png',
 ch9a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/kelbe_boutique_chair_zpsd8c179f6.png',
  ch9b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/kelbe_boutique_chair2_zpsb3dfa302.png',
  ch9c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/kelbe_boutique_chair3_zps1e8112a8.png',
 ch10a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/chair510_zpsd852289c.png',
  ch10b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/chair5102_zpsae30ef12.png',
  ch10c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/chair51023_zps97c9d945.png',
 ch11a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/chair110_zps67f481a9.png',
  ch11b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/chair1103_zpsc7492d82.png',
  ch11c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/chair1102_zps6cff2c76.png',
 ch12a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/blackp10_zps554f1bff.png',
  ch12b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/blackp103_zps66e9f1f8.png',
  ch12c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/blackp102_zps891e768b.png',
 ch13a: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/chair011_zpsa1938ed9.png',
  ch13b: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/chair0113_zps65f1a968.png',
  ch13c: 'http://i1275.photobucket.com/albums/y445/DesignersSociety/Boutique%20Content/chair0112_zps31b96174.png',
 fl1: 'http://s26.postimg.org/itfkbwfe1/woodvertical_zps878fc2bd.png',
 fl2: 'http://s26.postimg.org/l0jsztko9/smallbluetile_zps96b26713.png',
 fl3: 'http://s26.postimg.org/5t3tfgstl/wood_Zpattern_zpsa344a95c.png',
  fl4: 'http://s26.postimg.org/g0mcrvf1l/lightwoodhorizontal_zpse4b14766.png',
 fl5: 'http://s26.postimg.org/hlx15xzvt/Crushed_Stone_zpsd0446680.png',
fl6: 'http://s26.postimg.org/60muy8eeh/kelbe_man_floor.png',
 fl7: 'http://s26.postimg.org/59u4sgc15/grass_zpse8d6fe8a.png',
 fl8: 'http://s26.postimg.org/imx9v2gvd/floori13.png',
 fl9: 'http://s26.postimg.org/no4nwfobt/retrofloor.png',
 fl10: 'http://s26.postimg.org/dlpvtp9ex/floori16.png',
 fl11: 'http://s26.postimg.org/rtfkicm3t/floori15.png',
 fl12: 'http://s26.postimg.org/owsji2ga1/floori14.png',
    wa1: 'http://s7.postimg.org/hhs3zfxgb/boutiquebasedee.jpg',
  wa2: 'http://s26.postimg.org/sjkd14v6v/marblebrickwall2_zpsd1eb04d8.png',
 wa3: 'http://s26.postimg.org/481d2lcdj/marblebrickwall_zps2f3c5dc3.png',
wa4: 'http://s26.postimg.org/4q13w6rc7/modernbrickwall_zps6e8f508e.png',
 wa5: 'http://s26.postimg.org/gpcm3hwx3/oldbrickwall_zpsb6f14133.png',
wa6: 'http://s26.postimg.org/fs1lgvw13/kelbe_boutique_base.png',
 wa7: 'http://s26.postimg.org/xfjef35yf/kelbe_man_wall.png',
 wa8: 'http://s26.postimg.org/rot81cxyh/fresno5594.png',
 wa9: 'http://s26.postimg.org/6uca5se7d/angelinamc16.png',
 wa10: 'http://s26.postimg.org/qawzsb9bd/for_bt10.jpg',
 wa11: 'http://s26.postimg.org/c8b2dc3xl/for_bt11.png',
 wa12: 'http://s26.postimg.org/4eagrxw4p/for_bt10.png',
 wa13: 'http://s26.postimg.org/fips2cy5l/angelinamc23.png',
 wa14: 'http://s26.postimg.org/8cy0zwp2h/angelinamc24.png',
 wa15: 'http://s26.postimg.org/7r923su09/angelinamc26.png',
 wa16: 'http://s26.postimg.org/qtsfqq50p/btq_cr10.png',
 wa17: 'http://s26.postimg.org/6dhf8huqx/bg310.png',
 wa18: 'http://s26.postimg.org/yk3t9lwq1/duskwallpaper.png',
 wa19: 'http://s26.postimg.org/7dlyssuzt/scarletrenko3.png',
 wa20: 'http://s26.postimg.org/s98941r6x/phantom3.png',
 wa21: 'http://s26.postimg.org/4je81m3fr/champagnewallpaper_zps89c7e444.png',
 wa22: 'http://s26.postimg.org/6j40kicix/simplefloralwall_zpscc2c7900.png',
 wa23: 'http://s26.postimg.org/ka8hmq1gp/sweetshelli.png',
 wa24: 'http://s26.postimg.org/ecls3k9ux/backdr10.png',
 wa25: 'http://s26.postimg.org/p4sztil0n/bluewallpaper_zpsa0290f89.png',
 wa26: 'http://s26.postimg.org/49baw0e7b/cityskybackground.png',
 wa27: 'http://s26.postimg.org/u0wml7l61/citylightsbackground.png'
};


loadImages(sources, initStage);


  


    var stage = new Kinetic.Stage({
        container: 'container',
        width: 1000,
        height: 764
    });





    var layer = new Kinetic.Layer();



    var brOutline = new Kinetic.Rect({
        x: -20,
        y: -20,
        width: 1,
        height: 1,
        strokeWidth: 2,
        stroke: '#666',
        opacity: 0,
    });



    layer.add(brOutline);

 


    var closebutton = new Kinetic.Text({
           x: 0,
        y: 0,
        text: 'x',
        opacity: 0,
        fontSize: 20,
        fontStyle: 'bold',
        fontFamily: 'calibri',
draggable:true,
        fill: 'grey'
    });

    closebutton.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    closebutton.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });


    layer.add(closebutton);





    var control = new Kinetic.Text({
       x: 0,
        y: 0,
        text: 'Controls',
        opacity: 0,
        fontSize: 20,
        fontStyle: 'bold',
        fontFamily: 'georgia',
draggable:true,

        fill: 'grey'
    });
    layer.add(control);

  var controlrect = new Kinetic.Rect({
        x: 0,
        y: 0,
        width: 115,
        height: 80,
        strokeWidth: 1,
        stroke: 'grey',
draggable:true,
fill: '#d6d6d6',
        opacity: .00,
    });
    
layer.add(controlrect);




    var checkbutton = new Kinetic.Text({
               x: 0,
        y: 0,
        text: 'Ã¢Å“â€',
        opacity: 0,
        fontSize: 20,
        fontStyle: 'bold',
        fontFamily: 'georgia',
draggable:true,
        fill: 'grey'
    });

    checkbutton.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    checkbutton.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });

   layer.add(checkbutton);


    var upbutton = new Kinetic.Text({
               x: 0,
        y: 0,
        text: '+',
        opacity: 0,
        fontSize: 20,
        fontStyle: 'bold',
        fontFamily: 'georgia',
draggable:true,
        fill: 'grey'
    });

   upbutton.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    upbutton.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });

   layer.add(upbutton);

    var downbutton = new Kinetic.Text({
               x: 0,
        y: 0,
        text: '-',
        opacity: 0,
        fontSize: 20,
        fontStyle: 'bold',
        fontFamily: 'georgia',
draggable:true,
        fill: 'grey'
    });

   downbutton.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    downbutton.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });

   layer.add(downbutton);




controlrect.position({
                x: 0,
                y: 0
            });
 
control.position({
             x: controlrect.x() + 10,
                y: controlrect.y() + 10
            }); 

 closebutton.position({
              x: control.x() + 55,
                y: control.y() + 20
            });  
   
  checkbutton.position({
           x: control.x() + 15,
                y: control.y() + 20
            });  
 
  upbutton.position({
           x: control.x() + 15,
                y: control.y() + 40
            });  
 downbutton.position({
           x: control.x() + 55,
                y: control.y() + 40
            }); 

  

controlrect.on("dragstart", function () {
         
control.position({
             x: controlrect.x() + 10,
                y: controlrect.y() + 10
            }); 


 closebutton.position({
              x: control.x() + 55,
                y: control.y() + 20
            });  
   
  checkbutton.position({
           x: control.x() + 15,
                y: control.y() + 20
            });  
 
  upbutton.position({
           x: control.x() + 15,
                y: control.y() + 40
            });  
 downbutton.position({
           x: control.x() + 55,
                y: control.y() + 40
            }); 
 
    layer.draw()
        });


controlrect.on("dragend", function () {

control.position({
             x: controlrect.x() + 10,
                y: controlrect.y() + 10
            }); 
         

 closebutton.position({
              x: control.x() + 55,
                y: control.y() + 20
            });  
   
  checkbutton.position({
           x: control.x() + 15,
                y: control.y() + 20
            });  
 
  upbutton.position({
           x: control.x() + 15,
                y: control.y() + 40
            });  
 downbutton.position({
           x: control.x() + 55,
                y: control.y() + 40
            }); 
 
    layer.draw()
        });


    var nextId = 0;

    var BR = createResizer();







//image loader
var imageLoader = document.getElementById('imageLoader');
imageLoader.addEventListener('change', handleImage2, false);

 function handleImage2(f) {
    var reader2 = new FileReader();
    reader2.onload = function (event) {
    var imageGroup = new Kinetic.Group({
    x: 0,
    y: 0,
    draggable: true
    });



    layer.add(imageGroup);

    var img2 = new Image();
                img2.onload = function () {
                    imageGroup.add(new Kinetic.Image({
                        x: 0,
                        y: 0,
id: 'tat',
                        image: img2,
               width: img2.width,
            height: img2.height,
                        draggable: true
                    }));

   var tat = stage.get('#tat')[0];

imageGroup.on("dragend", function () {
        BR.assign(tat);

    });
   imageGroup.on("mouseup", function () {
        BR.assign(tat);

    });


   imageGroup.on('dragstart', function () {
        this.moveToTop();
 
    });



                    text.moveToTop();
                    stage.draw();
                };
                console.log(event);
                img2.src = event.target.result;


            };
            reader2.readAsDataURL(f.target.files[0]);

        }


var text = new Kinetic.Text({
    x: 10,
    y: 50,
    text: '',
    align: 'center',
    fontSize: '107',
    fontFamily: 'arial',
    fill: '#c33655',
    stroke: 'none',
    fillLinearGradientStartPoint: {
        x: -50,
        y: -50
    },
    fillLinearGradientEndPoint: {
        x: 50,
        y: 50
    },
    fillLinearGradientColorStops: [0, 'red', 1, 'yellow'],
    shadowOpacity: '0',
    shadowOffsetX: '2',
    shadowOffsetY: '2',
    shadowColor: '#707070',
    wrap: 'word',
    height: 'auto',
    draggable: true
});

stage.add(layer);
layer.add(text);

  text.on('dragstart', function () {
        this.moveToTop();
    });

document.getElementById("textBox").addEventListener("keyup", function () {
    text.setText(this.value);
    layer.draw();
}, true);

document.getElementById("textSize").addEventListener("change", function () {
    var size = this.value;
    text.fontSize(size);
    layer.draw();
}, true);

document.getElementById("fontFamily").addEventListener("change", function () {
    var font = this.value;
    text.fontFamily(font);
    layer.draw();
}, true);

document.getElementById("fontStyle").addEventListener("change", function () {
    var style = this.value;
    text.fontStyle(style);
    layer.draw();
}, true);

document.getElementById("fill").addEventListener("change", function () {
    var colour = this.value;
    text.fill(colour);
    layer.draw();
}, true);

document.getElementById("stroke").addEventListener("change", function () {
    var stroke = this.value;
    text.stroke(stroke);
    layer.draw();
}, false);

document.getElementById("strokeColor").addEventListener("change", function () {
    var stroke = this.value;
    text.stroke(stroke);
    layer.draw();
}, true);

document.getElementById("strokeWidth").addEventListener("change", function () {
    var strokeWidth = this.value;
    text.strokeWidth(strokeWidth);
    layer.draw();
}, true);

document.getElementById("shadowOpacity").addEventListener("change", function () {
    var shadowOpacity = this.value;
    text.shadowOpacity(shadowOpacity);
    layer.draw();
}, false);

document.getElementById("shadowOffsetX").addEventListener("change", function () {
    var shadowOffsetX = this.value;
    text.shadowOffsetX(shadowOffsetX);
    layer.draw();
}, true);

document.getElementById("shadowOffsetY").addEventListener("change", function () {
    var shadowOffsetY = this.value;
    text.shadowOffsetY(shadowOffsetY);
    layer.draw();
}, true);

document.getElementById("shadowColor").addEventListener("change", function () {
    var shadowColor = this.value;
    text.shadowColor(shadowColor);
    layer.draw();
}, true);



// utility
function cl() {
    console.log.apply(console, arguments);
}








    // drag image to the div with id='container'
    var container = document.getElementById("container");
    container.addEventListener("dragover", function (e) {
        e.preventDefault();
    }, false);
    container.addEventListener("drop", function (e) {
        var files = e.dataTransfer.files;
        if (files.length > 0) {
            var file = files[0];
            if (typeof FileReader !== "undefined" && file.type.indexOf("image") != -1) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var dragImage = new Image();
                    dragImage.onload = function () {
                        newDraggedImage(dragImage);
                    };
                    dragImage.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        }
        e.preventDefault();
    }, false);







    // create a new Kinetic.Image from the dropped image
    function newDraggedImage(img) {

        var id = 'img' + nextId;
        nextId++;

        createImage(img, 20, 20, id, 50);

        BR.assign(stage.find(id)[0]);

        layer.draw();


    }




    function createImage(img, x, y, id, minWidth) {
        var kImage = new Kinetic.Image({
            id: id,
            image: img,
            x: x,
            y: y,
            width: img.width,
            height: img.height,
            draggable: true,
        });
        kImage.minWidth = minWidth;
        kImage.originalWidth = img.width;
        kImage.originalHeight = img.height;
       
 kImage.on("dragend", function () {
            BR.assign(this);

        });
   
        kImage.on('dragstart', function () {
            this.moveToTop();
        });

   kImage.on("mouseup", function () {
        BR.assign(this);

    });
        layer.add(kImage);
        layer.draw();
    }







    function createResizer() {

        var BottomRight = new Kinetic.Circle({
            x: 0,
            y: 0,
            radius: 7,
            fill: "grey",
            stroke: "#999",
            strokeWidth: 1,
            draggable: true,
            opacity: 0,
            dragBoundFunc: function (pos) {

                // this.img is used often in this func so cache it
                var img = this.img;





                // keep x inside the group
                var minWidth = img.minWidth;
                if (pos.x - minWidth < this.minX) {
                    pos.x = this.minX + minWidth;
                    this.fill('grey');
                    brOutline.stroke('#666');
                } else if (pos.x > this.maxX) {
                    pos.x = this.maxX;
                    this.fill('grey');
                    brOutline.stroke('#666');
                } else {
                    this.fill('grey');
                    brOutline.stroke('#666');
                }

                // move y to the line connecting top-left with bottom-right
                var x1 = img.x();
                var y1 = img.y();
                var x2 = x1 + img.width();
                var y2 = y1 + img.height();
                var m = (y2 - y1) / (x2 - x1);
                pos.y = m * (pos.x - x2) + y2;

                // resize the image
                var w = pos.x - x1;
                var h = pos.y - y1;
                img.size({
                    width: w,
                    height: h
                });
                brOutline.size({
                    width: w,
                    height: h
                });

                // return the adjusted x,y
                return {
                    x: pos.x,
                    y: pos.y
                }
            }
        });
        BottomRight.setBounds = function (img) {
            this.minX = img.x();
            this.maxX = this.minX + img.maxX;
            this.minY = img.y();
            this.maxY = this.minY + img.maxY;
            //
            this.fill('grey');
            brOutline.stroke('#666');
            //
            layer.draw();
        };
        BottomRight.assign = function (img) {
            if (!img) {
                return;
            }
            this.img = img;
            this.x(img.x() + img.width());
            this.y(img.y() + img.height());
            this.moveToTop();
            //
            brOutline.position({
                x: img.x(),
                y: img.y()
            });
            brOutline.size({
                width: img.width(),
                height: img.height()
            });
            
            BR.img.on('dragend', function () {
                BottomRight.opacity(1.00);
                brOutline.opacity(1.00);
                closebutton.opacity(1.00);
 checkbutton.opacity(1.00);
upbutton.opacity(1.00);
downbutton.opacity(1.00);
 control.opacity(1.00);
controlrect.opacity(1.00);
controlrect.moveToTop();
        closebutton.moveToTop();
checkbutton.moveToTop();
upbutton.moveToTop();
downbutton.moveToTop();
control.moveToTop();
 text.moveToTop();

                layer.draw()
            });



  checkbutton.on('click', function () {
                BottomRight.opacity(.00);
                brOutline.opacity(.00);
                closebutton.opacity(.00);
upbutton.opacity(.00);
downbutton.opacity(.00);
 control.opacity(.00);
controlrect.opacity(.00);
     checkbutton.opacity(.00);
 text.moveToTop();
                       layer.draw()
            });

  BR.img.on('click', function () {
                BottomRight.opacity(.00);
                brOutline.opacity(.00);
                closebutton.opacity(.00);
upbutton.opacity(.00);
downbutton.opacity(.00);
 control.opacity(.00);
controlrect.opacity(.00);
     checkbutton.opacity(.00);
 text.moveToTop();
                       layer.draw()
            });


upbutton.on('click', function () {
BR.img.moveUp();
                       layer.draw()
            });


downbutton.on('click', function () {
BR.img.moveDown();
                       layer.draw()
            });


            BR.img.on('mouseup', function () {
controlrect.moveToTop();
control.moveToTop();
          closebutton.moveToTop();
   checkbutton.moveToTop();
upbutton.moveToTop();
downbutton.moveToTop();
 text.moveToTop();

                layer.draw()
            });

            closebutton.on('click', function () {
                BR.img.hide();
                BottomRight.opacity(.00);
                brOutline.opacity(.00);
                closebutton.opacity(.00);
checkbutton.opacity(.00);
 control.opacity(.00);
controlrect.opacity(.00);
upbutton.opacity(.00);
downbutton.opacity(.00);
 text.moveToTop();
                layer.draw()
            });



  


            this.setBounds(img);
        }



        layer.add(BottomRight);
        layer.draw();

        return (BottomRight);



    }








function initStage(images) {

 

    var wa1Img = new Kinetic.Image({
        x: 0,
        y: 0,
width: 1000,
height:764,
           image: images.wa1,
        visible: false,
     
        name: 'image'

    });
    
    layer.add(wa1Img);


  
   document.getElementById('wa1s').addEventListener('click', function() {
     wa1Img.moveToBottom();
      wa1Img.show();
        wa2Img.hide();
    wa3Img.hide();
    wa4Img.hide();
    wa5Img.hide();
  wa7Img.hide();
   wa6Img.hide();
   wa8Img.hide();
  wa9Img.hide();
  wa10Img.hide();
  wa11Img.hide();
  wa12Img.hide();
  wa13Img.hide();
  wa14Img.hide();
  wa15Img.hide();
  wa16Img.hide();
  wa17Img.hide();
  wa18Img.hide();
wa19Img.hide();
wa20Img.hide();
wa21Img.hide();
wa22Img.hide();
wa23Img.hide();
wa24Img.hide();
wa25Img.hide();
wa26Img.hide();
wa27Img.hide();
 el14Img.hide();
 el15Img.hide();
layer.draw();
           }, false);


 

    var wa2Img = new Kinetic.Image({
        x: 0,
        y: 0,
width: 1000,
height:764,
           image: images.wa2,
        visible: false,
     
        name: 'image'

    });
    
       layer.add(wa2Img);

  
   document.getElementById('wa2s').addEventListener('click', function() {
 wa2Img.moveToBottom();
      wa2Img.show();
       wa1Img.hide();
    wa3Img.hide();
    wa4Img.hide();
    wa5Img.hide();
  wa7Img.hide();
   wa6Img.hide();
   wa8Img.hide();
  wa9Img.hide();
  wa10Img.hide();
  wa11Img.hide();
  wa12Img.hide();
  wa13Img.hide();
  wa14Img.hide();
  wa15Img.hide();
  wa16Img.hide();
  wa17Img.hide();
  wa18Img.hide();
wa19Img.hide();
wa20Img.hide();
wa21Img.hide();
wa22Img.hide();
wa23Img.hide();
wa24Img.hide();
wa25Img.hide();
wa26Img.hide();
wa27Img.hide();
 el14Img.hide();
 el15Img.hide();
layer.draw();
           }, false);






    var wa3Img = new Kinetic.Image({
        x: 0,
        y: 0,
width: 1000,
height:764,
           image: images.wa3,
        visible: false,
     
        name: 'image'

    });
    
    layer.add(wa3Img);


  
   document.getElementById('wa3s').addEventListener('click', function() {
     wa3Img.moveToBottom();
      wa3Img.show();
        wa1Img.hide();
        wa2Img.hide();
    wa4Img.hide();
    wa5Img.hide();
  wa7Img.hide();
   wa6Img.hide();
   wa8Img.hide();
  wa9Img.hide();
  wa10Img.hide();
  wa11Img.hide();
  wa12Img.hide();
  wa13Img.hide();
  wa14Img.hide();
  wa15Img.hide();
  wa16Img.hide();
  wa17Img.hide();
  wa18Img.hide();
wa19Img.hide();
wa20Img.hide();
wa21Img.hide();
wa22Img.hide();
wa23Img.hide();
wa24Img.hide();
wa25Img.hide();
wa26Img.hide();
wa27Img.hide();
 el14Img.hide();
 el15Img.hide();
layer.draw();
           }, false);



    var wa4Img = new Kinetic.Image({
        x: 0,
        y: 0,
width: 1000,
height:764,
           image: images.wa4,
        visible: false,
     
        name: 'image'

    });
    
    layer.add(wa4Img);


  
   document.getElementById('wa4s').addEventListener('click', function() {
     wa4Img.moveToBottom();
      wa4Img.show();
        wa1Img.hide();
        wa2Img.hide();
    wa3Img.hide();
    wa5Img.hide();
   wa7Img.hide();
   wa6Img.hide();
   wa8Img.hide();
  wa9Img.hide();
  wa10Img.hide();
  wa11Img.hide();
  wa12Img.hide();
  wa13Img.hide();
  wa14Img.hide();
  wa15Img.hide();
  wa16Img.hide();
  wa17Img.hide();
  wa18Img.hide();
wa19Img.hide();
wa20Img.hide();
wa21Img.hide();
wa22Img.hide();
wa23Img.hide();
wa24Img.hide();
wa25Img.hide();
wa26Img.hide();
wa27Img.hide();
 el14Img.hide();
 el15Img.hide();
layer.draw();
           }, false);


    var wa5Img = new Kinetic.Image({
        x: 0,
        y: 0,
width: 1000,
height:764,
           image: images.wa5,
        visible: false,
     
        name: 'image'

    });
    
    layer.add(wa5Img);


  
   document.getElementById('wa5s').addEventListener('click', function() {
     wa5Img.moveToBottom();
      wa5Img.show();
        wa1Img.hide();
        wa2Img.hide();
        wa4Img.hide();
    wa3Img.hide();
   wa7Img.hide();
   wa6Img.hide();
   wa8Img.hide();
  wa9Img.hide();
  wa10Img.hide();
  wa11Img.hide();
  wa12Img.hide();
  wa13Img.hide();
  wa14Img.hide();
  wa15Img.hide();
  wa16Img.hide();
  wa17Img.hide();
  wa18Img.hide();
wa19Img.hide();
wa20Img.hide();
wa21Img.hide();
wa22Img.hide();
wa23Img.hide();
wa24Img.hide();
wa25Img.hide();
wa26Img.hide();
wa27Img.hide();
 el14Img.hide();
 el15Img.hide();
layer.draw();
           }, false);


var wa6Img = new Kinetic.Image({
        x: 0,
        y: 0,
           image: images.wa6,
        visible: false,
     width: 1000,
height:764,
        name: 'image'

    });
    
    layer.add(wa6Img);


  
   document.getElementById('wa6s').addEventListener('click', function() {
     wa6Img.moveToBottom();
      wa6Img.show();
        wa1Img.hide();
        wa2Img.hide();
        wa4Img.hide();
    wa3Img.hide();
   wa5Img.hide();
   wa7Img.hide();
   wa8Img.hide();
  wa9Img.hide();
  wa10Img.hide();
  wa11Img.hide();
  wa12Img.hide();
  wa13Img.hide();
  wa14Img.hide();
  wa15Img.hide();
  wa16Img.hide();
  wa17Img.hide();
  wa18Img.hide();
wa19Img.hide();
wa20Img.hide();
wa21Img.hide();
wa22Img.hide();
wa23Img.hide();
wa24Img.hide();
wa25Img.hide();
wa26Img.hide();
wa27Img.hide();
 el14Img.hide();
 el15Img.hide();
layer.draw();
           }, false);





var wa7Img = new Kinetic.Image({
        x: 0,
        y: 0,
           image: images.wa7,
        visible: false,
width: 1000,
height:764,
     
        name: 'image'

    });
    
    layer.add(wa7Img);


  
   document.getElementById('wa7s').addEventListener('click', function() {
     wa7Img.moveToBottom();
      wa7Img.show();
        wa1Img.hide();
        wa2Img.hide();
        wa4Img.hide();
    wa3Img.hide();
   wa5Img.hide();
   wa6Img.hide();
   wa8Img.hide();
  wa9Img.hide();
  wa10Img.hide();
  wa11Img.hide();
  wa12Img.hide();
  wa13Img.hide();
  wa14Img.hide();
  wa15Img.hide();
  wa16Img.hide();
  wa17Img.hide();
  wa18Img.hide();
wa19Img.hide();
wa20Img.hide();
wa21Img.hide();
wa22Img.hide();
wa23Img.hide();
wa24Img.hide();
wa25Img.hide();
wa26Img.hide();
wa27Img.hide();
 el14Img.hide();
 el15Img.hide();
layer.draw();
           }, false);





var wa8Img = new Kinetic.Image({
        x: 0,
        y: 0,
width: 1000,
height:764,
           image: images.wa8,
        visible: false,
     
        name: 'image'

    });
    
    layer.add(wa8Img);


  
   document.getElementById('wa8s').addEventListener('click', function() {
     wa8Img.moveToBottom();
      wa8Img.show();
        wa1Img.hide();
        wa2Img.hide();
        wa4Img.hide();
    wa3Img.hide();
   wa5Img.hide();
   wa7Img.hide();
   wa6Img.hide();
  wa9Img.hide();
  wa10Img.hide();
  wa11Img.hide();
  wa12Img.hide();
  wa13Img.hide();
  wa14Img.hide();
  wa15Img.hide();
  wa16Img.hide();
  wa17Img.hide();
  wa18Img.hide();
wa19Img.hide();
wa20Img.hide();
wa21Img.hide();
wa22Img.hide();
wa23Img.hide();
wa24Img.hide();
wa25Img.hide();
wa26Img.hide();
wa27Img.hide();
 el14Img.hide();
 el15Img.hide();
layer.draw();
           }, false);




var wa9Img = new Kinetic.Image({
        x: 0,
        y: 0,
width: 1000,
height:764,
           image: images.wa9,
        visible: false,
     
        name: 'image'

    });
    
    layer.add(wa9Img);


  
   document.getElementById('wa9s').addEventListener('click', function() {
     wa9Img.moveToBottom();
      wa9Img.show();
        wa1Img.hide();
        wa2Img.hide();
        wa4Img.hide();
    wa3Img.hide();
   wa5Img.hide();
   wa7Img.hide();
   wa6Img.hide();
  wa8Img.hide();
  wa10Img.hide();
  wa11Img.hide();
  wa12Img.hide();
  wa13Img.hide();
  wa14Img.hide();
  wa15Img.hide();
  wa16Img.hide();
  wa17Img.hide();
  wa18Img.hide();
wa19Img.hide();
wa20Img.hide();
wa21Img.hide();
wa22Img.hide();
wa23Img.hide();
wa24Img.hide();
wa25Img.hide();
wa26Img.hide();
wa27Img.hide();
 el14Img.hide();
 el15Img.hide();
layer.draw();
           }, false);


var wa10Img = new Kinetic.Image({
        x: 0,
        y: 0,
           image: images.wa10,
        visible: false,
     width: 1000,
height:764,
        name: 'image'

    });
    
    layer.add(wa10Img);


  
   document.getElementById('wa10s').addEventListener('click', function() {
     wa10Img.moveToBottom();
      wa10Img.show();
        wa1Img.hide();
        wa2Img.hide();
        wa4Img.hide();
    wa3Img.hide();
   wa5Img.hide();
   wa7Img.hide();
   wa6Img.hide();
  wa8Img.hide();
  wa9Img.hide();
  wa11Img.hide();
  wa12Img.hide();
  wa13Img.hide();
  wa14Img.hide();
  wa15Img.hide();
  wa16Img.hide();
  wa17Img.hide();
  wa18Img.hide();
wa19Img.hide();
wa20Img.hide();
wa21Img.hide();
wa22Img.hide();
wa23Img.hide();
wa24Img.hide();
wa25Img.hide();
wa26Img.hide();
wa27Img.hide();
 el14Img.hide();
 el15Img.hide();
layer.draw();
           }, false);


var wa11Img = new Kinetic.Image({
        x: 0,
        y: 0,
width: 1000,
height:764,
           image: images.wa11,
        visible: false,
     
        name: 'image'

    });
    
    layer.add(wa11Img);


  
   document.getElementById('wa11s').addEventListener('click', function() {
     wa11Img.moveToBottom();
      wa11Img.show();
        wa1Img.hide();
        wa2Img.hide();
        wa4Img.hide();
    wa3Img.hide();
   wa5Img.hide();
   wa7Img.hide();
   wa6Img.hide();
  wa8Img.hide();
  wa9Img.hide();
  wa10Img.hide();
  wa12Img.hide();
  wa13Img.hide();
  wa14Img.hide();
  wa15Img.hide();
  wa16Img.hide();
  wa17Img.hide();
  wa18Img.hide();
wa19Img.hide();
wa20Img.hide();
wa21Img.hide();
wa22Img.hide();
wa23Img.hide();
wa24Img.hide();
wa25Img.hide();
wa26Img.hide();
wa27Img.hide();
 el14Img.hide();
 el15Img.hide();
layer.draw();
           }, false);





var wa12Img = new Kinetic.Image({
        x: 0,
        y: 0,
width: 1000,
height:764,
           image: images.wa12,
        visible: false,
     
        name: 'image'

    });
    
    layer.add(wa12Img);


  
   document.getElementById('wa12s').addEventListener('click', function() {
     wa12Img.moveToBottom();
      wa12Img.show();
        wa1Img.hide();
        wa2Img.hide();
        wa4Img.hide();
    wa3Img.hide();
   wa5Img.hide();
   wa7Img.hide();
   wa6Img.hide();
  wa8Img.hide();
  wa9Img.hide();
  wa10Img.hide();
  wa11Img.hide();
  wa13Img.hide();
  wa14Img.hide();
  wa15Img.hide();
  wa16Img.hide();
  wa17Img.hide();
  wa18Img.hide();
wa19Img.hide();
wa20Img.hide();
wa21Img.hide();
wa22Img.hide();
wa23Img.hide();
wa24Img.hide();
wa25Img.hide();
wa26Img.hide();
wa27Img.hide();
 el14Img.hide();
 el15Img.hide();
layer.draw();
           }, false);






var wa13Img = new Kinetic.Image({
        x: 0,
        y: 0,
width: 1000,
height:764,
           image: images.wa13,
        visible: false,
     
        name: 'image'

    });
    
    layer.add(wa13Img);


  
   document.getElementById('wa13s').addEventListener('click', function() {
     wa13Img.moveToBottom();
      wa13Img.show();
        wa1Img.hide();
        wa2Img.hide();
        wa4Img.hide();
    wa3Img.hide();
   wa5Img.hide();
   wa7Img.hide();
   wa6Img.hide();
  wa8Img.hide();
  wa9Img.hide();
  wa10Img.hide();
  wa11Img.hide();
  wa12Img.hide();
  wa14Img.hide();
  wa15Img.hide();
  wa16Img.hide();
  wa17Img.hide();
  wa18Img.hide();
wa19Img.hide();
wa20Img.hide();
wa21Img.hide();
wa22Img.hide();
wa23Img.hide();
wa24Img.hide();
wa25Img.hide();
wa26Img.hide();
wa27Img.hide();
 el14Img.hide();
 el15Img.hide();
layer.draw();
           }, false);




var wa14Img = new Kinetic.Image({
        x: 0,
        y: 0,
width: 1000,
height:764,
           image: images.wa14,
        visible: false,
     
        name: 'image'

    });
    
    layer.add(wa14Img);


  
   document.getElementById('wa14s').addEventListener('click', function() {
     wa14Img.moveToBottom();
      wa14Img.show();
        wa1Img.hide();
        wa2Img.hide();
        wa4Img.hide();
    wa3Img.hide();
   wa5Img.hide();
   wa7Img.hide();
   wa6Img.hide();
  wa8Img.hide();
  wa9Img.hide();
  wa10Img.hide();
  wa11Img.hide();
  wa12Img.hide();
  wa13Img.hide();
  wa15Img.hide();
  wa16Img.hide();
  wa17Img.hide();
  wa18Img.hide();
wa19Img.hide();
wa20Img.hide();
wa21Img.hide();
wa22Img.hide();
wa23Img.hide();
wa24Img.hide();
wa25Img.hide();
wa26Img.hide();
wa27Img.hide();
 el14Img.hide();
 el15Img.hide();
layer.draw();
           }, false);





var wa15Img = new Kinetic.Image({
        x: 0,
        y: 0,
width: 1000,
height:764,
           image: images.wa15,
        visible: false,
     
        name: 'image'

    });
    
    layer.add(wa15Img);


  
   document.getElementById('wa15s').addEventListener('click', function() {
     wa15Img.moveToBottom();
      wa15Img.show();
        wa1Img.hide();
        wa2Img.hide();
        wa4Img.hide();
    wa3Img.hide();
   wa5Img.hide();
   wa7Img.hide();
   wa6Img.hide();
  wa8Img.hide();
  wa9Img.hide();
  wa10Img.hide();
  wa11Img.hide();
  wa12Img.hide();
  wa13Img.hide();
  wa14Img.hide();
  wa16Img.hide();
  wa17Img.hide();
  wa18Img.hide();
wa19Img.hide();
wa20Img.hide();
wa21Img.hide();
wa22Img.hide();
wa23Img.hide();
wa24Img.hide();
wa25Img.hide();
wa26Img.hide();
wa27Img.hide();
 el14Img.hide();
 el15Img.hide();
layer.draw();
           }, false);





var wa16Img = new Kinetic.Image({
        x: 0,
        y: 0,
width: 1000,
height:764,
           image: images.wa16,
        visible: false,
     
        name: 'image'

    });
    
    layer.add(wa16Img);


  
   document.getElementById('wa16s').addEventListener('click', function() {
     wa16Img.moveToBottom();
      wa16Img.show();
        wa1Img.hide();
        wa2Img.hide();
        wa4Img.hide();
    wa3Img.hide();
   wa5Img.hide();
   wa7Img.hide();
   wa6Img.hide();
  wa8Img.hide();
  wa9Img.hide();
  wa10Img.hide();
  wa11Img.hide();
  wa12Img.hide();
  wa13Img.hide();
  wa14Img.hide();
  wa15Img.hide();
  wa17Img.hide();
  wa18Img.hide();
wa19Img.hide();
wa20Img.hide();
wa21Img.hide();
wa22Img.hide();
wa23Img.hide();
wa24Img.hide();
wa25Img.hide();
wa26Img.hide();
wa27Img.hide();
 el14Img.hide();
 el15Img.hide();
layer.draw();
           }, false);




var wa17Img = new Kinetic.Image({
        x: 0,
        y: 0,
width: 1000,
height:764,
           image: images.wa17,
        visible: false,
     
        name: 'image'

    });
    
    layer.add(wa17Img);


  
   document.getElementById('wa17s').addEventListener('click', function() {
     wa17Img.moveToBottom();
      wa17Img.show();
        wa1Img.hide();
        wa2Img.hide();
        wa4Img.hide();
    wa3Img.hide();
   wa5Img.hide();
   wa7Img.hide();
   wa6Img.hide();
  wa8Img.hide();
  wa9Img.hide();
  wa10Img.hide();
  wa11Img.hide();
  wa12Img.hide();
  wa13Img.hide();
  wa14Img.hide();
  wa15Img.hide();
  wa16Img.hide();
  wa18Img.hide();
wa19Img.hide();
wa20Img.hide();
wa21Img.hide();
wa22Img.hide();
wa23Img.hide();
wa24Img.hide();
wa25Img.hide();
wa26Img.hide();
wa27Img.hide();
 el14Img.hide();
 el15Img.hide();
layer.draw();
        }, false);



var wa18Img = new Kinetic.Image({
        x: 0,
        y: 0,
width: 1000,
height:764,
           image: images.wa18,
        visible: false,
     
        name: 'image'

    });
    
    layer.add(wa18Img);


  
   document.getElementById('wa18s').addEventListener('click', function() {
     wa18Img.moveToBottom();
      wa18Img.show();
        wa1Img.hide();
        wa2Img.hide();
        wa4Img.hide();
    wa3Img.hide();
   wa5Img.hide();
   wa7Img.hide();
   wa6Img.hide();
  wa8Img.hide();
  wa9Img.hide();
  wa10Img.hide();
  wa11Img.hide();
  wa12Img.hide();
  wa13Img.hide();
  wa14Img.hide();
  wa15Img.hide();
  wa16Img.hide();
  wa17Img.hide();
wa19Img.hide();
wa20Img.hide();
wa21Img.hide();
wa22Img.hide();
wa23Img.hide();
wa24Img.hide();
wa25Img.hide();
wa26Img.hide();
wa27Img.hide();
 el14Img.hide();
 el15Img.hide();
layer.draw();

        }, false);







var wa19Img = new Kinetic.Image({
        x: 0,
        y: 0,
width: 1000,
height:764,
           image: images.wa19,
        visible: false,
     
        name: 'image'

    });
    
    layer.add(wa19Img);


  
   document.getElementById('wa19s').addEventListener('click', function() {
     wa19Img.moveToBottom();
      wa19Img.show();
        wa1Img.hide();
        wa2Img.hide();
        wa4Img.hide();
    wa3Img.hide();
   wa5Img.hide();
   wa7Img.hide();
   wa6Img.hide();
  wa8Img.hide();
  wa9Img.hide();
  wa10Img.hide();
  wa11Img.hide();
  wa12Img.hide();
  wa13Img.hide();
  wa14Img.hide();
  wa15Img.hide();
  wa16Img.hide();
  wa17Img.hide();
wa18Img.hide();
wa20Img.hide();
wa21Img.hide();
wa22Img.hide();
wa23Img.hide();
wa24Img.hide();
wa25Img.hide();
wa26Img.hide();
wa27Img.hide();
 el14Img.hide();
 el15Img.hide();
layer.draw();

        }, false);






var wa20Img = new Kinetic.Image({
        x: 0,
        y: 0,
width: 1000,
height:764,
           image: images.wa20,
        visible: false,
     
        name: 'image'

    });
    
    layer.add(wa20Img);


  
   document.getElementById('wa20s').addEventListener('click', function() {
     wa20Img.moveToBottom();
      wa20Img.show();
        wa1Img.hide();
        wa2Img.hide();
        wa4Img.hide();
    wa3Img.hide();
   wa5Img.hide();
   wa7Img.hide();
   wa6Img.hide();
  wa8Img.hide();
  wa9Img.hide();
  wa10Img.hide();
  wa11Img.hide();
  wa12Img.hide();
  wa13Img.hide();
  wa14Img.hide();
  wa15Img.hide();
  wa16Img.hide();
  wa17Img.hide();
wa18Img.hide();
wa19Img.hide();
wa21Img.hide();
wa22Img.hide();
wa23Img.hide();
wa24Img.hide();
wa25Img.hide();
wa26Img.hide();
wa27Img.hide();
 el14Img.hide();
 el15Img.hide();
layer.draw();

        }, false);





var wa21Img = new Kinetic.Image({
        x: 0,
        y: 0,
width: 1000,
height:764,
           image: images.wa21,
        visible: false,
     
        name: 'image'

    });
    
    layer.add(wa21Img);


  
   document.getElementById('wa21s').addEventListener('click', function() {
     wa21Img.moveToBottom();
      wa21Img.show();
        wa1Img.hide();
        wa2Img.hide();
        wa4Img.hide();
    wa3Img.hide();
   wa5Img.hide();
   wa7Img.hide();
   wa6Img.hide();
  wa8Img.hide();
  wa9Img.hide();
  wa10Img.hide();
  wa11Img.hide();
  wa12Img.hide();
  wa13Img.hide();
  wa14Img.hide();
  wa15Img.hide();
  wa16Img.hide();
  wa17Img.hide();
wa18Img.hide();
wa19Img.hide();
wa20Img.hide();
wa22Img.hide();
wa23Img.hide();
wa24Img.hide();
wa25Img.hide();
wa26Img.hide();
wa27Img.hide();
 el14Img.hide();
 el15Img.hide();
layer.draw();

        }, false);







var wa22Img = new Kinetic.Image({
        x: 0,
        y: 0,
width: 1000,
height:764,
           image: images.wa22,
        visible: false,
     
        name: 'image'

    });
    
    layer.add(wa22Img);


  
   document.getElementById('wa22s').addEventListener('click', function() {
     wa22Img.moveToBottom();
      wa22Img.show();
        wa1Img.hide();
        wa2Img.hide();
        wa4Img.hide();
    wa3Img.hide();
   wa5Img.hide();
   wa7Img.hide();
   wa6Img.hide();
  wa8Img.hide();
  wa9Img.hide();
  wa10Img.hide();
  wa11Img.hide();
  wa12Img.hide();
  wa13Img.hide();
  wa14Img.hide();
  wa15Img.hide();
  wa16Img.hide();
  wa17Img.hide();
wa18Img.hide();
wa19Img.hide();
wa20Img.hide();
wa21Img.hide();
wa23Img.hide();
wa24Img.hide();
wa25Img.hide();
wa26Img.hide();
wa27Img.hide();
 el14Img.hide();
 el15Img.hide();
layer.draw();

        }, false);



var wa23Img = new Kinetic.Image({
        x: 0,
        y: 0,
width: 1000,
height:764,
           image: images.wa23,
        visible: false,
     
        name: 'image'

    });
    
    layer.add(wa23Img);


  
   document.getElementById('wa23s').addEventListener('click', function() {
     wa23Img.moveToBottom();
      wa23Img.show();
        wa1Img.hide();
        wa2Img.hide();
        wa4Img.hide();
    wa3Img.hide();
   wa5Img.hide();
   wa7Img.hide();
   wa6Img.hide();
  wa8Img.hide();
  wa9Img.hide();
  wa10Img.hide();
  wa11Img.hide();
  wa12Img.hide();
  wa13Img.hide();
  wa14Img.hide();
  wa15Img.hide();
  wa16Img.hide();
  wa17Img.hide();
wa18Img.hide();
wa19Img.hide();
wa20Img.hide();
wa21Img.hide();
wa22Img.hide();
wa24Img.hide();
wa25Img.hide();
wa26Img.hide();
wa27Img.hide();
 el14Img.hide();
 el15Img.hide();
layer.draw();

        }, false);





var wa24Img = new Kinetic.Image({
        x: 0,
        y: 0,
width: 1000,
height:764,
           image: images.wa24,
        visible: false,
     
        name: 'image'

    });
    
    layer.add(wa24Img);


  
   document.getElementById('wa24s').addEventListener('click', function() {
     wa24Img.moveToBottom();
      wa24Img.show();
        wa1Img.hide();
        wa2Img.hide();
        wa4Img.hide();
    wa3Img.hide();
   wa5Img.hide();
   wa7Img.hide();
   wa6Img.hide();
  wa8Img.hide();
  wa9Img.hide();
  wa10Img.hide();
  wa11Img.hide();
  wa12Img.hide();
  wa13Img.hide();
  wa14Img.hide();
  wa15Img.hide();
  wa16Img.hide();
  wa17Img.hide();
wa18Img.hide();
wa19Img.hide();
wa20Img.hide();
wa21Img.hide();
wa23Img.hide();
wa22Img.hide();
wa25Img.hide();
wa26Img.hide();
wa27Img.hide();
 el14Img.hide();
 el15Img.hide();
layer.draw();

        }, false);





var wa25Img = new Kinetic.Image({
        x: 0,
        y: 0,
width: 1000,
height:764,
           image: images.wa25,
        visible: false,
     
        name: 'image'

    });
    
    layer.add(wa25Img);


  
   document.getElementById('wa25s').addEventListener('click', function() {
     wa25Img.moveToBottom();
      wa25Img.show();
        wa1Img.hide();
        wa2Img.hide();
        wa4Img.hide();
    wa3Img.hide();
   wa5Img.hide();
   wa7Img.hide();
   wa6Img.hide();
  wa8Img.hide();
  wa9Img.hide();
  wa10Img.hide();
  wa11Img.hide();
  wa12Img.hide();
  wa13Img.hide();
  wa14Img.hide();
  wa15Img.hide();
  wa16Img.hide();
  wa17Img.hide();
wa18Img.hide();
wa19Img.hide();
wa20Img.hide();
wa21Img.hide();
wa23Img.hide();
wa22Img.hide();
wa24Img.hide();
wa26Img.hide();
wa27Img.hide();
 el14Img.hide();
 el15Img.hide();
layer.draw();

        }, false);





var wa26Img = new Kinetic.Image({
        x: 0,
        y: 0,
width: 1000,
height:764,
           image: images.wa26,
        visible: false,
     
        name: 'image'

    });
    
    layer.add(wa26Img);


  
   document.getElementById('wa26s').addEventListener('click', function() {
     wa26Img.moveToBottom();
      wa26Img.show();
        wa1Img.hide();
        wa2Img.hide();
        wa4Img.hide();
    wa3Img.hide();
   wa5Img.hide();
   wa7Img.hide();
   wa6Img.hide();
  wa8Img.hide();
  wa9Img.hide();
  wa10Img.hide();
  wa11Img.hide();
  wa12Img.hide();
  wa13Img.hide();
  wa14Img.hide();
  wa15Img.hide();
  wa16Img.hide();
  wa17Img.hide();
wa18Img.hide();
wa19Img.hide();
wa20Img.hide();
wa21Img.hide();
wa23Img.hide();
wa22Img.hide();
wa24Img.hide();
wa25Img.hide();
wa27Img.hide();
 el14Img.hide();
 el15Img.hide();
layer.draw();

        }, false);



var wa27Img = new Kinetic.Image({
        x: 0,
        y: 0,
width:1000,
height:764,
           image: images.wa27,
        visible: false,
     
        name: 'image'

    });
    
    layer.add(wa27Img);


  
   document.getElementById('wa27s').addEventListener('click', function() {
     wa27Img.moveToBottom();
      wa27Img.show();
        wa1Img.hide();
        wa2Img.hide();
        wa4Img.hide();
    wa3Img.hide();
   wa5Img.hide();
   wa7Img.hide();
   wa6Img.hide();
  wa8Img.hide();
  wa9Img.hide();
  wa10Img.hide();
  wa11Img.hide();
  wa12Img.hide();
  wa13Img.hide();
  wa14Img.hide();
  wa15Img.hide();
  wa16Img.hide();
  wa17Img.hide();
wa18Img.hide();
wa19Img.hide();
wa20Img.hide();
wa21Img.hide();
wa23Img.hide();
wa22Img.hide();
wa24Img.hide();
wa25Img.hide();
wa26Img.hide();
 el14Img.hide();
 el15Img.hide();
layer.draw();

        }, false);








var fl1Img = new Kinetic.Image({
        x: 0,
        y: 600,
height:164,
width:1000,
           image: images.fl1,
        visible: false,
     
        name: 'image'

    });
    
    layer.add(fl1Img);

   document.getElementById('fl1s').addEventListener('click', function() {
      fl1Img.show();
 el11Img.hide();
 el13Img.hide();
 el12Img.hide();
   fl2Img.hide();
   fl3Img.hide();
   fl4Img.hide();
   fl5Img.hide();
   fl6Img.hide();
   fl7Img.hide();
   fl8Img.hide();
   fl9Img.hide();
   fl10Img.hide();
      fl11Img.hide();
   fl12Img.hide();
layer.draw();

        }, false);





var fl2Img = new Kinetic.Image({
        x: 0,
        y: 600,
height:164,
width:1000,
           image: images.fl2,
        visible: false,
     
        name: 'image'

    });
    
    layer.add(fl2Img);

   document.getElementById('fl2s').addEventListener('click', function() {
      fl2Img.show();
 el11Img.hide();
 el13Img.hide();
 el12Img.hide();
   fl1Img.hide();
   fl3Img.hide();
   fl4Img.hide();
   fl5Img.hide();
   fl6Img.hide();
   fl7Img.hide();
   fl8Img.hide();
   fl9Img.hide();
   fl10Img.hide();
      fl11Img.hide();
   fl12Img.hide();
layer.draw();

        }, false);




var fl3Img = new Kinetic.Image({
        x: 0,
        y: 600,
height:164,
width:1000,
           image: images.fl3,
        visible: false,
     
        name: 'image'

    });
    
    layer.add(fl3Img);

   document.getElementById('fl3s').addEventListener('click', function() {
      fl3Img.show();
 el11Img.hide();
 el13Img.hide();
 el12Img.hide();
   fl2Img.hide();
   fl1Img.hide();
   fl4Img.hide();
   fl5Img.hide();
   fl6Img.hide();
   fl7Img.hide();
   fl8Img.hide();
   fl9Img.hide();
   fl10Img.hide();
      fl11Img.hide();
   fl12Img.hide();
layer.draw();

        }, false);





var fl4Img = new Kinetic.Image({
        x: 0,
        y: 600,
height:164,
width:1000,
           image: images.fl4,
        visible: false,
     
        name: 'image'

    });
    
    layer.add(fl4Img);

   document.getElementById('fl4s').addEventListener('click', function() {
      fl4Img.show();
 el11Img.hide();
 el13Img.hide();
 el12Img.hide();
   fl2Img.hide();
   fl3Img.hide();
   fl1Img.hide();
   fl5Img.hide();
   fl6Img.hide();
   fl7Img.hide();
   fl8Img.hide();
   fl9Img.hide();
   fl10Img.hide();
      fl11Img.hide();
   fl12Img.hide();
layer.draw();

        }, false);





var fl5Img = new Kinetic.Image({
        x: 0,
        y: 600,
height:164,
width:1000,
           image: images.fl5,
        visible: false,
     
        name: 'image'

    });
    
    layer.add(fl5Img);

   document.getElementById('fl5s').addEventListener('click', function() {
      fl5Img.show();
 el11Img.hide();
 el13Img.hide();
 el12Img.hide();
   fl2Img.hide();
   fl3Img.hide();
   fl4Img.hide();
   fl1Img.hide();
   fl6Img.hide();
   fl7Img.hide();
   fl8Img.hide();
   fl9Img.hide();
   fl10Img.hide();
      fl11Img.hide();
   fl12Img.hide();
layer.draw();

        }, false);




var fl6Img = new Kinetic.Image({
        x: 0,
        y: 600,
height:164,
width:1000,
           image: images.fl6,
        visible: false,
     
        name: 'image'

    });
    
    layer.add(fl6Img);

   document.getElementById('fl6s').addEventListener('click', function() {
      fl6Img.show();
 el11Img.hide();
 el13Img.hide();
 el12Img.hide();
   fl2Img.hide();
   fl3Img.hide();
   fl4Img.hide();
   fl5Img.hide();
   fl1Img.hide();
   fl7Img.hide();
   fl8Img.hide();
   fl9Img.hide();
   fl10Img.hide();
      fl11Img.hide();
   fl12Img.hide();
layer.draw();

        }, false);





var fl7Img = new Kinetic.Image({
        x: 0,
        y: 600,
height:164,
width:1000,
           image: images.fl7,
        visible: false,
     
        name: 'image'

    });
    
    layer.add(fl7Img);

   document.getElementById('fl7s').addEventListener('click', function() {
      fl7Img.show();
 el11Img.hide();
 el13Img.hide();
 el12Img.hide();
   fl2Img.hide();
   fl3Img.hide();
   fl4Img.hide();
   fl5Img.hide();
   fl6Img.hide();
   fl1Img.hide();
   fl8Img.hide();
   fl9Img.hide();
   fl10Img.hide();
      fl11Img.hide();
   fl12Img.hide();
layer.draw();

        }, false);





var fl8Img = new Kinetic.Image({
        x: 0,
        y: 600,
height:164,
width:1000,
           image: images.fl8,
        visible: false,
     
        name: 'image'

    });
    
    layer.add(fl8Img);

   document.getElementById('fl8s').addEventListener('click', function() {
      fl8Img.show();
 el11Img.hide();
 el13Img.hide();
 el12Img.hide();
   fl2Img.hide();
   fl3Img.hide();
   fl4Img.hide();
   fl5Img.hide();
   fl6Img.hide();
   fl7Img.hide();
   fl1Img.hide();
   fl9Img.hide();
   fl10Img.hide();
      fl11Img.hide();
   fl12Img.hide();
layer.draw();

        }, false);






var fl9Img = new Kinetic.Image({
        x: 0,
        y: 600,
height:164,
width:1000,
           image: images.fl9,
        visible: false,
     
        name: 'image'

    });
    
    layer.add(fl9Img);

   document.getElementById('fl9s').addEventListener('click', function() {
      fl9Img.show();
 el11Img.hide();
 el13Img.hide();
 el12Img.hide();
   fl2Img.hide();
   fl3Img.hide();
   fl4Img.hide();
   fl5Img.hide();
   fl6Img.hide();
   fl7Img.hide();
   fl8Img.hide();
   fl1Img.hide();
   fl10Img.hide();
      fl11Img.hide();
   fl12Img.hide();
layer.draw();

        }, false);




var fl10Img = new Kinetic.Image({
        x: 0,
        y: 600,
height:164,
width:1000,
           image: images.fl10,
        visible: false,
     
        name: 'image'

    });
    
    layer.add(fl10Img);

   document.getElementById('fl10s').addEventListener('click', function() {
      fl10Img.show();
 el11Img.hide();
 el13Img.hide();
 el12Img.hide();
   fl2Img.hide();
   fl3Img.hide();
   fl4Img.hide();
   fl5Img.hide();
   fl6Img.hide();
   fl7Img.hide();
   fl8Img.hide();
   fl9Img.hide();
   fl1Img.hide();
      fl11Img.hide();
   fl12Img.hide();
layer.draw();

        }, false);







var fl11Img = new Kinetic.Image({
        x: 0,
        y: 600,
height:164,
width:1000,
           image: images.fl11,
        visible: false,
     
        name: 'image'

    });
    
    layer.add(fl11Img);

   document.getElementById('fl11s').addEventListener('click', function() {
      fl11Img.show();
 el11Img.hide();
 el13Img.hide();
 el12Img.hide();
   fl2Img.hide();
   fl3Img.hide();
   fl4Img.hide();
   fl5Img.hide();
   fl6Img.hide();
   fl7Img.hide();
   fl8Img.hide();
   fl9Img.hide();
   fl10Img.hide();
      fl1Img.hide();
   fl12Img.hide();
layer.draw();

        }, false);






var fl12Img = new Kinetic.Image({
        x: 0,
        y: 600,
height:164,
width:1000,
           image: images.fl12,
        visible: false,
     
        name: 'image'

    });
    
    layer.add(fl12Img);

   document.getElementById('fl12s').addEventListener('click', function() {
      fl12Img.show();
 el11Img.hide();
 el13Img.hide();
 el12Img.hide();
   fl2Img.hide();
   fl3Img.hide();
   fl4Img.hide();
   fl5Img.hide();
   fl6Img.hide();
   fl7Img.hide();
   fl8Img.hide();
   fl9Img.hide();
   fl10Img.hide();
      fl11Img.hide();
   fl1Img.hide();
layer.draw();

        }, false);



 document.getElementById('fln').addEventListener('click', function() {
      fl12Img.hide();
 el11Img.hide();
 el13Img.hide();
 el12Img.hide();
   fl2Img.hide();
   fl3Img.hide();
   fl4Img.hide();
   fl5Img.hide();
   fl6Img.hide();
   fl7Img.hide();
   fl8Img.hide();
   fl9Img.hide();
   fl10Img.hide();
      fl11Img.hide();
   fl1Img.hide();
layer.draw();

        }, false);












    var wi1Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    wi1Group.on("dragstart", function () {
        BR.assign(wi1Img);

    });

 wi1Group.on("mouseup", function () {
        BR.assign(wi1Img);

    });



    layer.add(wi1Group);


    var wi1Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.wi1a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    wi1Group.add(wi1Img);

  
   document.getElementById('wi1s').addEventListener('click', function() {
         wi1Group.show();
      wi1Img.show();
layer.draw();
           }, false);




     document.getElementById('wi1a').addEventListener('click', function () {
 wi1Img.image(images.wi1a) ,

          layer.draw(); 
        });

     document.getElementById('wi1b').addEventListener('click', function () {
 wi1Img.image(images.wi1b) ,

          layer.draw(); 
        });

     document.getElementById('wi1c').addEventListener('click', function () {
 wi1Img.image(images.wi1c) ,

          layer.draw(); 
        });


















    var wi2Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    wi2Group.on("dragstart", function () {
        BR.assign(wi2Img);

    });

 wi2Group.on("mouseup", function () {
        BR.assign(wi2Img);

    });
 

    layer.add(wi2Group);


    var wi2Img = new Kinetic.Image({
        x: 0,
        y: 0,
            image: images.wi2a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    wi2Group.add(wi2Img);

  
   document.getElementById('wi2s').addEventListener('click', function() {
         wi2Group.show();
      wi2Img.show();
layer.draw();
           }, false);

    document.getElementById('wi2a').addEventListener('click', function () {
 wi2Img.image(images.wi2a) ,

          layer.draw(); 
        });

     document.getElementById('wi2b').addEventListener('click', function () {
 wi2Img.image(images.wi2b) ,

          layer.draw(); 
        });

     document.getElementById('wi2c').addEventListener('click', function () {
 wi2Img.image(images.wi2c) ,

          layer.draw(); 
        });












    var wi3Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    wi3Group.on("dragstart", function () {
        BR.assign(wi3Img);

    });

 wi3Group.on("mouseup", function () {
        BR.assign(wi3Img);

    });
   


    layer.add(wi3Group);


    var wi3Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.wi3a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    wi3Group.add(wi3Img);

  
   document.getElementById('wi3s').addEventListener('click', function() {
         wi3Group.show();
      wi3Img.show();
layer.draw();
           }, false);


    document.getElementById('wi3a').addEventListener('click', function () {
 wi3Img.image(images.wi3a) ,

          layer.draw(); 
        });

     document.getElementById('wi3b').addEventListener('click', function () {
 wi3Img.image(images.wi3b) ,

          layer.draw(); 
        });

     document.getElementById('wi3c').addEventListener('click', function () {
 wi3Img.image(images.wi3c) ,

          layer.draw(); 
        });


















    var wi4Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    wi4Group.on("dragstart", function () {
        BR.assign(wi4Img);

    });

 wi4Group.on("mouseup", function () {
        BR.assign(wi4Img);

    });



    layer.add(wi4Group);


    var wi4Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.wi4a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    wi4Group.add(wi4Img);

  
   document.getElementById('wi4s').addEventListener('click', function() {
         wi4Group.show();
      wi4Img.show();
layer.draw();
           }, false);

    document.getElementById('wi4a').addEventListener('click', function () {
 wi4Img.image(images.wi4a) ,

          layer.draw(); 
        });

     document.getElementById('wi4b').addEventListener('click', function () {
 wi4Img.image(images.wi4b) ,

          layer.draw(); 
        });

     document.getElementById('wi4c').addEventListener('click', function () {
 wi4Img.image(images.wi4c) ,

          layer.draw(); 
        });














    var wi5Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    wi5Group.on("dragstart", function () {
        BR.assign(wi5Img);

    });

 wi5Group.on("mouseup", function () {
        BR.assign(wi5Img);

    });
 


    layer.add(wi5Group);


    var wi5Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.wi5a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    wi5Group.add(wi5Img);

  
   document.getElementById('wi5s').addEventListener('click', function() {
         wi5Group.show();
      wi5Img.show();
layer.draw();
           }, false);

    document.getElementById('wi5a').addEventListener('click', function () {
 wi5Img.image(images.wi5a) ,

          layer.draw(); 
        });

     document.getElementById('wi5b').addEventListener('click', function () {
 wi5Img.image(images.wi5b) ,

          layer.draw(); 
        });

     document.getElementById('wi5c').addEventListener('click', function () {
 wi5Img.image(images.wi5c) ,

          layer.draw(); 
        });








    var wi6Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    wi6Group.on("dragstart", function () {
        BR.assign(wi6Img);

    });

 wi6Group.on("mouseup", function () {
        BR.assign(wi6Img);

    });
 



    layer.add(wi6Group);


    var wi6Img = new Kinetic.Image({
        x: 0,
        y: 0,
width:200,
height:268,
        image: images.wi6a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    wi6Group.add(wi6Img);

  
   document.getElementById('wi6s').addEventListener('click', function() {
         wi6Group.show();
      wi6Img.show();
layer.draw();
           }, false);



    document.getElementById('wi6a').addEventListener('click', function () {
 wi6Img.image(images.wi6a) ,

          layer.draw(); 
        });

     document.getElementById('wi6b').addEventListener('click', function () {
 wi6Img.image(images.wi6b) ,

          layer.draw(); 
        });

     document.getElementById('wi6c').addEventListener('click', function () {
 wi6Img.image(images.wi6c) ,

          layer.draw(); 
        });













    var wi7Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    wi7Group.on("dragstart", function () {
        BR.assign(wi7Img);

    });

 wi7Group.on("mouseup", function () {
        BR.assign(wi7Img);

    });
  



    layer.add(wi7Group);


    var wi7Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.wi7a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    wi7Group.add(wi7Img);

  
   document.getElementById('wi7s').addEventListener('click', function() {
         wi7Group.show();
      wi7Img.show();
layer.draw();
           }, false);



    document.getElementById('wi7a').addEventListener('click', function () {
 wi7Img.image(images.wi7a) ,

          layer.draw(); 
        });

     document.getElementById('wi7b').addEventListener('click', function () {
 wi7Img.image(images.wi7b) ,

          layer.draw(); 
        });

     document.getElementById('wi7c').addEventListener('click', function () {
 wi7Img.image(images.wi7c) ,

          layer.draw(); 
        });









    var wi8Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    wi8Group.on("dragstart", function () {
        BR.assign(wi8Img);

    });

 wi8Group.on("mouseup", function () {
        BR.assign(wi8Img);

    });
   



    layer.add(wi8Group);


    var wi8Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.wi8a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    wi8Group.add(wi8Img);

  
   document.getElementById('wi8s').addEventListener('click', function() {
         wi8Group.show();
      wi8Img.show();
layer.draw();
           }, false);




    document.getElementById('wi8a').addEventListener('click', function () {
 wi8Img.image(images.wi8a) ,

          layer.draw(); 
        });

     document.getElementById('wi8b').addEventListener('click', function () {
 wi8Img.image(images.wi8b) ,

          layer.draw(); 
        });

     document.getElementById('wi8c').addEventListener('click', function () {
 wi8Img.image(images.wi8c) ,

          layer.draw(); 
        });











    var wi9Group = new Kinetic.Group({
        x: 0,
        y: 0,

 visible:false,
        draggable: true,
    });


    wi9Group.on("dragstart", function () {
        BR.assign(wi9Img);

    });

 wi9Group.on("mouseup", function () {
        BR.assign(wi9Img);

    });
   


    layer.add(wi9Group);


    var wi9Img = new Kinetic.Image({
        x: 0,
        y: 0,
        image: images.wi9,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    wi9Group.add(wi9Img);

  
   document.getElementById('wi9s').addEventListener('click', function() {
         wi9Group.show();
      wi9Img.show();
layer.draw();
           }, false);














    var wi10Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    wi10Group.on("dragstart", function () {
        BR.assign(wi10Img);

    });

 wi10Group.on("mouseup", function () {
        BR.assign(wi10Img);

    });
 


    layer.add(wi10Group);


    var wi10Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.wi10,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    wi10Group.add(wi10Img);

  
   document.getElementById('wi10s').addEventListener('click', function() {
         wi10Group.show();
      wi10Img.show();
layer.draw();
           }, false);

  











    var wi11Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    wi11Group.on("dragstart", function () {
        BR.assign(wi11Img);

    });

 wi11Group.on("mouseup", function () {
        BR.assign(wi11Img);

    });
 


    layer.add(wi11Group);


    var wi11Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.wi11,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    wi11Group.add(wi11Img);

  
   document.getElementById('wi11s').addEventListener('click', function() {
         wi11Group.show();
      wi11Img.show();
layer.draw();
           }, false);













    var wi12Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    wi12Group.on("dragstart", function () {
        BR.assign(wi12Img);

    });

 wi12Group.on("mouseup", function () {
        BR.assign(wi12Img);

    });
 


    layer.add(wi12Group);


    var wi12Img = new Kinetic.Image({
        x: 0,
        y: 0,
width:200,
height:200,
        image: images.wi12,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    wi12Group.add(wi12Img);

  
   document.getElementById('wi12s').addEventListener('click', function() {
         wi12Group.show();
      wi12Img.show();
layer.draw();
           }, false);

 






    var wi13Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    wi13Group.on("dragstart", function () {
        BR.assign(wi13Img);

    });

 wi13Group.on("mouseup", function () {
        BR.assign(wi13Img);

    });
  


    layer.add(wi13Group);


    var wi13Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.wi13,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    wi13Group.add(wi13Img);

  
   document.getElementById('wi13s').addEventListener('click', function() {
         wi13Group.show();
      wi13Img.show();
layer.draw();
           }, false);






    var wi14Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    wi14Group.on("dragstart", function () {
        BR.assign(wi14Img);

    });

 wi14Group.on("mouseup", function () {
        BR.assign(wi14Img);

    });
 



    layer.add(wi14Group);


    var wi14Img = new Kinetic.Image({
        x: 0,
        y: 0,
width:200,
height:200,

        image: images.wi14,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    wi14Group.add(wi14Img);

  
   document.getElementById('wi14s').addEventListener('click', function() {
         wi14Group.show();
      wi14Img.show();
layer.draw();
           }, false);



    var wi15Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    wi15Group.on("dragstart", function () {
        BR.assign(wi15Img);

    });

 wi15Group.on("mouseup", function () {
        BR.assign(wi15Img);

    });
  


    layer.add(wi15Group);


    var wi15Img = new Kinetic.Image({
        x: 0,
        y: 0,
width:302,
height:200,
        image: images.wi15,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    wi15Group.add(wi15Img);

  
   document.getElementById('wi15s').addEventListener('click', function() {
         wi15Group.show();
      wi15Img.show();
layer.draw();
           }, false);




    var wi16Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    wi16Group.on("dragstart", function () {
        BR.assign(wi16Img);

    });

 wi16Group.on("mouseup", function () {
        BR.assign(wi16Img);

    });
  


    layer.add(wi16Group);


    var wi16Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.wi16,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    wi16Group.add(wi16Img);

  
   document.getElementById('wi16s').addEventListener('click', function() {
         wi16Group.show();
      wi16Img.show();
layer.draw();
           }, false);




    var wi17Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    wi17Group.on("dragstart", function () {
        BR.assign(wi17Img);

    });

 wi17Group.on("mouseup", function () {
        BR.assign(wi17Img);

    });
  



    layer.add(wi17Group);


    var wi17Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.wi17,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    wi17Group.add(wi17Img);

  
   document.getElementById('wi17s').addEventListener('click', function() {
         wi17Group.show();
      wi17Img.show();
layer.draw();
           }, false);




    var wi18Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    wi18Group.on("dragstart", function () {
        BR.assign(wi18Img);

    });

 wi18Group.on("mouseup", function () {
        BR.assign(wi18Img);

    });
 


    layer.add(wi18Group);


    var wi18Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.wi18,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    wi18Group.add(wi18Img);

  
   document.getElementById('wi18s').addEventListener('click', function() {
         wi18Group.show();
      wi18Img.show();
layer.draw();
           }, false);




    var wi19Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    wi19Group.on("dragstart", function () {
        BR.assign(wi19Img);

    });

 wi19Group.on("mouseup", function () {
        BR.assign(wi19Img);

    });
 


    layer.add(wi19Group);


    var wi19Img = new Kinetic.Image({
        x: 0,
        y: 0,
width:400,
height:300,
        image: images.wi19,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    wi19Group.add(wi19Img);

  
   document.getElementById('wi19s').addEventListener('click', function() {
         wi19Group.show();
      wi19Img.show();
layer.draw();
           }, false);




    var wi20Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    wi20Group.on("dragstart", function () {
        BR.assign(wi20Img);

    });

 wi20Group.on("mouseup", function () {
        BR.assign(wi20Img);

    });




    layer.add(wi20Group);


    var wi20Img = new Kinetic.Image({
        x: 0,
        y: 0,
width:300,
height:433,
        image: images.wi20,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    wi20Group.add(wi20Img);

  
   document.getElementById('wi20s').addEventListener('click', function() {
         wi20Group.show();
      wi20Img.show();
layer.draw();
           }, false);
















    var ch1Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    ch1Group.on("dragstart", function () {
        BR.assign(ch1Img);

    });

 ch1Group.on("mouseup", function () {
        BR.assign(ch1Img);

    });
    ch1Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(ch1Group);


    var ch1Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.ch1a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    ch1Group.add(ch1Img);

  
   document.getElementById('ch1s').addEventListener('click', function() {
         ch1Group.show();
      ch1Img.show();
layer.draw();
           }, false);




     document.getElementById('ch1a').addEventListener('click', function () {
 ch1Img.image(images.ch1a) ,

          layer.draw(); 
        });

     document.getElementById('ch1b').addEventListener('click', function () {
 ch1Img.image(images.ch1b) ,

          layer.draw(); 
        });

     document.getElementById('ch1c').addEventListener('click', function () {
 ch1Img.image(images.ch1c) ,

          layer.draw(); 
        });


















    var ch2Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    ch2Group.on("dragstart", function () {
        BR.assign(ch2Img);

    });

 ch2Group.on("mouseup", function () {
        BR.assign(ch2Img);

    });
    ch2Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(ch2Group);


    var ch2Img = new Kinetic.Image({
        x: 0,
        y: 0,
            image: images.ch2a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    ch2Group.add(ch2Img);

  
   document.getElementById('ch2s').addEventListener('click', function() {
         ch2Group.show();
      ch2Img.show();
layer.draw();
           }, false);

    document.getElementById('ch2a').addEventListener('click', function () {
 ch2Img.image(images.ch2a) ,

          layer.draw(); 
        });

     document.getElementById('ch2b').addEventListener('click', function () {
 ch2Img.image(images.ch2b) ,

          layer.draw(); 
        });

     document.getElementById('ch2c').addEventListener('click', function () {
 ch2Img.image(images.ch2c) ,

          layer.draw(); 
        });












    var ch3Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    ch3Group.on("dragstart", function () {
        BR.assign(ch3Img);

    });

 ch3Group.on("mouseup", function () {
        BR.assign(ch3Img);

    });
    ch3Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(ch3Group);


    var ch3Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.ch3a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    ch3Group.add(ch3Img);

  
   document.getElementById('ch3s').addEventListener('click', function() {
         ch3Group.show();
      ch3Img.show();
layer.draw();
           }, false);


    document.getElementById('ch3a').addEventListener('click', function () {
 ch3Img.image(images.ch3a) ,

          layer.draw(); 
        });

     document.getElementById('ch3b').addEventListener('click', function () {
 ch3Img.image(images.ch3b) ,

          layer.draw(); 
        });

     document.getElementById('ch3c').addEventListener('click', function () {
 ch3Img.image(images.ch3c) ,

          layer.draw(); 
        });


















    var ch4Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    ch4Group.on("dragstart", function () {
        BR.assign(ch4Img);

    });

 ch4Group.on("mouseup", function () {
        BR.assign(ch4Img);

    });
    ch4Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(ch4Group);


    var ch4Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.ch4a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    ch4Group.add(ch4Img);

  
   document.getElementById('ch4s').addEventListener('click', function() {
         ch4Group.show();
      ch4Img.show();
layer.draw();
           }, false);

    document.getElementById('ch4a').addEventListener('click', function () {
 ch4Img.image(images.ch4a) ,

          layer.draw(); 
        });

     document.getElementById('ch4b').addEventListener('click', function () {
 ch4Img.image(images.ch4b) ,

          layer.draw(); 
        });

     document.getElementById('ch4c').addEventListener('click', function () {
 ch4Img.image(images.ch4c) ,

          layer.draw(); 
        });














    var ch5Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    ch5Group.on("dragstart", function () {
        BR.assign(ch5Img);

    });

 ch5Group.on("mouseup", function () {
        BR.assign(ch5Img);

    });
    ch5Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(ch5Group);


    var ch5Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.ch5a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    ch5Group.add(ch5Img);

  
   document.getElementById('ch5s').addEventListener('click', function() {
         ch5Group.show();
      ch5Img.show();
layer.draw();
           }, false);

    document.getElementById('ch5a').addEventListener('click', function () {
 ch5Img.image(images.ch5a) ,

          layer.draw(); 
        });

     document.getElementById('ch5b').addEventListener('click', function () {
 ch5Img.image(images.ch5b) ,

          layer.draw(); 
        });

     document.getElementById('ch5c').addEventListener('click', function () {
 ch5Img.image(images.ch5c) ,

          layer.draw(); 
        });








    var ch6Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    ch6Group.on("dragstart", function () {
        BR.assign(ch6Img);

    });

 ch6Group.on("mouseup", function () {
        BR.assign(ch6Img);

    });
    ch6Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(ch6Group);


    var ch6Img = new Kinetic.Image({
        x: 0,
        y: 0,
width: 266,
height: 306,
        image: images.ch6a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    ch6Group.add(ch6Img);

  
   document.getElementById('ch6s').addEventListener('click', function() {
         ch6Group.show();
      ch6Img.show();
layer.draw();
           }, false);

    document.getElementById('ch6a').addEventListener('click', function () {
 ch6Img.image(images.ch6a) ,

          layer.draw(); 
        });

     document.getElementById('ch6b').addEventListener('click', function () {
 ch6Img.image(images.ch6b) ,

          layer.draw(); 
        });

     document.getElementById('ch6c').addEventListener('click', function () {
 ch6Img.image(images.ch6c) ,

          layer.draw(); 
        });














    var ch7Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    ch7Group.on("dragstart", function () {
        BR.assign(ch7Img);

    });

 ch7Group.on("mouseup", function () {
        BR.assign(ch7Img);

    });
    ch7Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(ch7Group);


    var ch7Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.ch7a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    ch7Group.add(ch7Img);

  
   document.getElementById('ch7s').addEventListener('click', function() {
         ch7Group.show();
      ch7Img.show();
layer.draw();
           }, false);
    document.getElementById('ch7a').addEventListener('click', function () {
 ch7Img.image(images.ch7a) ,

          layer.draw(); 
        });

     document.getElementById('ch7b').addEventListener('click', function () {
 ch7Img.image(images.ch7b) ,

          layer.draw(); 
        });

     document.getElementById('ch7c').addEventListener('click', function () {
 ch7Img.image(images.ch7c) ,

          layer.draw(); 
        });










    var ch8Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    ch8Group.on("dragstart", function () {
        BR.assign(ch8Img);

    });

 ch8Group.on("mouseup", function () {
        BR.assign(ch8Img);

    });
    ch8Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(ch8Group);


    var ch8Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.ch8a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    ch8Group.add(ch8Img);

  
   document.getElementById('ch8s').addEventListener('click', function() {
         ch8Group.show();
      ch8Img.show();
layer.draw();
           }, false);

    document.getElementById('ch8a').addEventListener('click', function () {
 ch8Img.image(images.ch8a) ,

          layer.draw(); 
        });

     document.getElementById('ch8b').addEventListener('click', function () {
 ch8Img.image(images.ch8b) ,

          layer.draw(); 
        });

     document.getElementById('ch8c').addEventListener('click', function () {
 ch8Img.image(images.ch8c) ,

          layer.draw(); 
        });











    var ch9Group = new Kinetic.Group({
        x: 0,
        y: 0,

 visible:false,
        draggable: true,
    });


    ch9Group.on("dragstart", function () {
        BR.assign(ch9Img);

    });

 ch9Group.on("mouseup", function () {
        BR.assign(ch9Img);

    });
    ch9Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(ch9Group);


    var ch9Img = new Kinetic.Image({
        x: 0,
        y: 0,
width: 301,
height: 300,
        image: images.ch9a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    ch9Group.add(ch9Img);

  
   document.getElementById('ch9s').addEventListener('click', function() {
         ch9Group.show();
      ch9Img.show();
layer.draw();
           }, false);

    document.getElementById('ch9a').addEventListener('click', function () {
 ch9Img.image(images.ch9a) ,

          layer.draw(); 
        });

     document.getElementById('ch9b').addEventListener('click', function () {
 ch9Img.image(images.ch9b) ,

          layer.draw(); 
        });

     document.getElementById('ch9c').addEventListener('click', function () {
 ch9Img.image(images.ch9c) ,

          layer.draw(); 
        });












    var ch10Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    ch10Group.on("dragstart", function () {
        BR.assign(ch10Img);

    });

 ch10Group.on("mouseup", function () {
        BR.assign(ch10Img);

    });
    ch10Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(ch10Group);


    var ch10Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.ch10a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    ch10Group.add(ch10Img);

  
   document.getElementById('ch10s').addEventListener('click', function() {
         ch10Group.show();
      ch10Img.show();
layer.draw();
           }, false);

    document.getElementById('ch10a').addEventListener('click', function () {
 ch10Img.image(images.ch10a) ,

          layer.draw(); 
        });

     document.getElementById('ch10b').addEventListener('click', function () {
 ch10Img.image(images.ch10b) ,

          layer.draw(); 
        });

     document.getElementById('ch10c').addEventListener('click', function () {
 ch10Img.image(images.ch10c) ,

          layer.draw(); 
        });













    var ch11Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    ch11Group.on("dragstart", function () {
        BR.assign(ch11Img);

    });

 ch11Group.on("mouseup", function () {
        BR.assign(ch11Img);

    });
    ch11Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(ch11Group);


    var ch11Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.ch11a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    ch11Group.add(ch11Img);

  
   document.getElementById('ch11s').addEventListener('click', function() {
         ch11Group.show();
      ch11Img.show();
layer.draw();
           }, false);

    document.getElementById('ch11a').addEventListener('click', function () {
 ch11Img.image(images.ch11a) ,

          layer.draw(); 
        });

     document.getElementById('ch11b').addEventListener('click', function () {
 ch11Img.image(images.ch11b) ,

          layer.draw(); 
        });

     document.getElementById('ch11c').addEventListener('click', function () {
 ch11Img.image(images.ch11c) ,

          layer.draw(); 
        });













    var ch12Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    ch12Group.on("dragstart", function () {
        BR.assign(ch12Img);

    });

 ch12Group.on("mouseup", function () {
        BR.assign(ch12Img);

    });
    ch12Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(ch12Group);


    var ch12Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.ch12a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    ch12Group.add(ch12Img);

  
   document.getElementById('ch12s').addEventListener('click', function() {
         ch12Group.show();
      ch12Img.show();
layer.draw();
           }, false);

    document.getElementById('ch12a').addEventListener('click', function () {
 ch12Img.image(images.ch12a) ,

          layer.draw(); 
        });

     document.getElementById('ch12b').addEventListener('click', function () {
 ch12Img.image(images.ch12b) ,

          layer.draw(); 
        });

     document.getElementById('ch12c').addEventListener('click', function () {
 ch12Img.image(images.ch12c) ,

          layer.draw(); 
        });






    var ch13Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    ch13Group.on("dragstart", function () {
        BR.assign(ch13Img);

    });

 ch13Group.on("mouseup", function () {
        BR.assign(ch13Img);

    });
    ch13Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(ch13Group);


    var ch13Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.ch13a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    ch13Group.add(ch13Img);

  
   document.getElementById('ch13s').addEventListener('click', function() {
         ch13Group.show();
      ch13Img.show();
layer.draw();
           }, false);




    document.getElementById('ch13a').addEventListener('click', function () {
 ch13Img.image(images.ch13a) ,

          layer.draw(); 
        });

     document.getElementById('ch13b').addEventListener('click', function () {
 ch13Img.image(images.ch13b) ,

          layer.draw(); 
        });

     document.getElementById('ch13c').addEventListener('click', function () {
 ch13Img.image(images.ch13c) ,

          layer.draw(); 
        });







    var co1Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    co1Group.on("dragstart", function () {
        BR.assign(co1Img);

    });

 co1Group.on("mouseup", function () {
        BR.assign(co1Img);

    });
    co1Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(co1Group);


    var co1Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.co1a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    co1Group.add(co1Img);

  
   document.getElementById('co1s').addEventListener('click', function() {
         co1Group.show();
      co1Img.show();
layer.draw();
           }, false);




     document.getElementById('co1a').addEventListener('click', function () {
 co1Img.image(images.co1a) ,

          layer.draw(); 
        });

     document.getElementById('co1b').addEventListener('click', function () {
 co1Img.image(images.co1b) ,

          layer.draw(); 
        });

     document.getElementById('co1c').addEventListener('click', function () {
 co1Img.image(images.co1c) ,

          layer.draw(); 
        });


















    var co2Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    co2Group.on("dragstart", function () {
        BR.assign(co2Img);

    });

 co2Group.on("mouseup", function () {
        BR.assign(co2Img);

    });
    co2Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(co2Group);


    var co2Img = new Kinetic.Image({
        x: 0,
        y: 0,
            image: images.co2a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    co2Group.add(co2Img);

  
   document.getElementById('co2s').addEventListener('click', function() {
         co2Group.show();
      co2Img.show();
layer.draw();
           }, false);

    document.getElementById('co2a').addEventListener('click', function () {
 co2Img.image(images.co2a) ,

          layer.draw(); 
        });

     document.getElementById('co2b').addEventListener('click', function () {
 co2Img.image(images.co2b) ,

          layer.draw(); 
        });

     document.getElementById('co2c').addEventListener('click', function () {
 co2Img.image(images.co2c) ,

          layer.draw(); 
        });












    var co3Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    co3Group.on("dragstart", function () {
        BR.assign(co3Img);

    });

 co3Group.on("mouseup", function () {
        BR.assign(co3Img);

    });
    co3Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(co3Group);


    var co3Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.co3a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    co3Group.add(co3Img);

  
   document.getElementById('co3s').addEventListener('click', function() {
         co3Group.show();
      co3Img.show();
layer.draw();
           }, false);


    document.getElementById('co3a').addEventListener('click', function () {
 co3Img.image(images.co3a) ,

          layer.draw(); 
        });

     document.getElementById('co3b').addEventListener('click', function () {
 co3Img.image(images.co3b) ,

          layer.draw(); 
        });

     document.getElementById('co3c').addEventListener('click', function () {
 co3Img.image(images.co3c) ,

          layer.draw(); 
        });


















    var co4Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    co4Group.on("dragstart", function () {
        BR.assign(co4Img);

    });

 co4Group.on("mouseup", function () {
        BR.assign(co4Img);

    });
    co4Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(co4Group);


    var co4Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.co4a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    co4Group.add(co4Img);

  
   document.getElementById('co4s').addEventListener('click', function() {
         co4Group.show();
      co4Img.show();
layer.draw();
           }, false);

    document.getElementById('co4a').addEventListener('click', function () {
 co4Img.image(images.co4a) ,

          layer.draw(); 
        });

     document.getElementById('co4b').addEventListener('click', function () {
 co4Img.image(images.co4b) ,

          layer.draw(); 
        });

     document.getElementById('co4c').addEventListener('click', function () {
 co4Img.image(images.co4c) ,

          layer.draw(); 
        });














    var co5Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    co5Group.on("dragstart", function () {
        BR.assign(co5Img);

    });

 co5Group.on("mouseup", function () {
        BR.assign(co5Img);

    });
    co5Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(co5Group);


    var co5Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.co5a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    co5Group.add(co5Img);

  
   document.getElementById('co5s').addEventListener('click', function() {
         co5Group.show();
      co5Img.show();
layer.draw();
           }, false);

    document.getElementById('co5a').addEventListener('click', function () {
 co5Img.image(images.co5a) ,

          layer.draw(); 
        });

     document.getElementById('co5b').addEventListener('click', function () {
 co5Img.image(images.co5b) ,

          layer.draw(); 
        });

     document.getElementById('co5c').addEventListener('click', function () {
 co5Img.image(images.co5c) ,

          layer.draw(); 
        });








    var co6Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    co6Group.on("dragstart", function () {
        BR.assign(co6Img);

    });

 co6Group.on("mouseup", function () {
        BR.assign(co6Img);

    });
    co6Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(co6Group);


    var co6Img = new Kinetic.Image({
        x: 0,
        y: 0,
        image: images.co6a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    co6Group.add(co6Img);

  
   document.getElementById('co6s').addEventListener('click', function() {
         co6Group.show();
      co6Img.show();
layer.draw();
           }, false);

    document.getElementById('co6a').addEventListener('click', function () {
 co6Img.image(images.co6a) ,

          layer.draw(); 
        });

     document.getElementById('co6b').addEventListener('click', function () {
 co6Img.image(images.co6b) ,

          layer.draw(); 
        });

     document.getElementById('co6c').addEventListener('click', function () {
 co6Img.image(images.co6c) ,

          layer.draw(); 
        });














    var co7Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    co7Group.on("dragstart", function () {
        BR.assign(co7Img);

    });

 co7Group.on("mouseup", function () {
        BR.assign(co7Img);

    });
    co7Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(co7Group);


    var co7Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.co7a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    co7Group.add(co7Img);

  
   document.getElementById('co7s').addEventListener('click', function() {
         co7Group.show();
      co7Img.show();
layer.draw();
           }, false);
    document.getElementById('co7a').addEventListener('click', function () {
 co7Img.image(images.co7a) ,

          layer.draw(); 
        });

     document.getElementById('co7b').addEventListener('click', function () {
 co7Img.image(images.co7b) ,

          layer.draw(); 
        });

     document.getElementById('co7c').addEventListener('click', function () {
 co7Img.image(images.co7c) ,

          layer.draw(); 
        });










    var co8Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    co8Group.on("dragstart", function () {
        BR.assign(co8Img);

    });

 co8Group.on("mouseup", function () {
        BR.assign(co8Img);

    });
    co8Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(co8Group);


    var co8Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.co8a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    co8Group.add(co8Img);

  
   document.getElementById('co8s').addEventListener('click', function() {
         co8Group.show();
      co8Img.show();
layer.draw();
           }, false);

    document.getElementById('co8a').addEventListener('click', function () {
 co8Img.image(images.co8a) ,

          layer.draw(); 
        });

     document.getElementById('co8b').addEventListener('click', function () {
 co8Img.image(images.co8b) ,

          layer.draw(); 
        });

     document.getElementById('co8c').addEventListener('click', function () {
 co8Img.image(images.co8c) ,

          layer.draw(); 
        });











    var co9Group = new Kinetic.Group({
        x: 0,
        y: 0,

 visible:false,
        draggable: true,
    });


    co9Group.on("dragstart", function () {
        BR.assign(co9Img);

    });

 co9Group.on("mouseup", function () {
        BR.assign(co9Img);

    });
    co9Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(co9Group);


    var co9Img = new Kinetic.Image({
        x: 0,
        y: 0,
width:278,
height:218,
        image: images.co9a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    co9Group.add(co9Img);

  
   document.getElementById('co9s').addEventListener('click', function() {
         co9Group.show();
      co9Img.show();
layer.draw();
           }, false);

    document.getElementById('co9a').addEventListener('click', function () {
 co9Img.image(images.co9a) ,

          layer.draw(); 
        });

     document.getElementById('co9b').addEventListener('click', function () {
 co9Img.image(images.co9b) ,

          layer.draw(); 
        });

     document.getElementById('co9c').addEventListener('click', function () {
 co9Img.image(images.co9c) ,

          layer.draw(); 
        });












    var co10Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    co10Group.on("dragstart", function () {
        BR.assign(co10Img);

    });

 co10Group.on("mouseup", function () {
        BR.assign(co10Img);

    });
    co10Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(co10Group);


    var co10Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.co10a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    co10Group.add(co10Img);

  
   document.getElementById('co10s').addEventListener('click', function() {
         co10Group.show();
      co10Img.show();
layer.draw();
           }, false);

    document.getElementById('co10a').addEventListener('click', function () {
 co10Img.image(images.co10a) ,

          layer.draw(); 
        });

     document.getElementById('co10b').addEventListener('click', function () {
 co10Img.image(images.co10b) ,

          layer.draw(); 
        });

     document.getElementById('co10c').addEventListener('click', function () {
 co10Img.image(images.co10c) ,

          layer.draw(); 
        });













    var co11Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    co11Group.on("dragstart", function () {
        BR.assign(co11Img);

    });

 co11Group.on("mouseup", function () {
        BR.assign(co11Img);

    });
    co11Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(co11Group);


    var co11Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.co11a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    co11Group.add(co11Img);

  
   document.getElementById('co11s').addEventListener('click', function() {
         co11Group.show();
      co11Img.show();
layer.draw();
           }, false);

    document.getElementById('co11a').addEventListener('click', function () {
 co11Img.image(images.co11a) ,

          layer.draw(); 
        });

     document.getElementById('co11b').addEventListener('click', function () {
 co11Img.image(images.co11b) ,

          layer.draw(); 
        });

     document.getElementById('co11c').addEventListener('click', function () {
 co11Img.image(images.co11c) ,

          layer.draw(); 
        });













    var co12Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    co12Group.on("dragstart", function () {
        BR.assign(co12Img);

    });

 co12Group.on("mouseup", function () {
        BR.assign(co12Img);

    });
    co12Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(co12Group);


    var co12Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.co12,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    co12Group.add(co12Img);

  
   document.getElementById('co12s').addEventListener('click', function() {
         co12Group.show();
      co12Img.show();
layer.draw();
           }, false);

 






    var co13Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    co13Group.on("dragstart", function () {
        BR.assign(co13Img);

    });

 co13Group.on("mouseup", function () {
        BR.assign(co13Img);

    });
    co13Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(co13Group);


    var co13Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.co13,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    co13Group.add(co13Img);

  
   document.getElementById('co13s').addEventListener('click', function() {
         co13Group.show();
      co13Img.show();
layer.draw();
           }, false);
















    var co14Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    co14Group.on("dragstart", function () {
        BR.assign(co14Img);

    });

 co14Group.on("mouseup", function () {
        BR.assign(co14Img);

    });
    co14Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(co14Group);


    var co14Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.co14,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    co14Group.add(co14Img);

  
   document.getElementById('co14s').addEventListener('click', function() {
         co14Group.show();
      co14Img.show();
layer.draw();
           }, false);











    var de1Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    de1Group.on("dragstart", function () {
        BR.assign(de1Img);

    });

 de1Group.on("mouseup", function () {
        BR.assign(de1Img);

    });
    de1Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(de1Group);


    var de1Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.de1a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    de1Group.add(de1Img);

  
   document.getElementById('de1s').addEventListener('click', function() {
         de1Group.show();
      de1Img.show();
layer.draw();
           }, false);




     document.getElementById('de1a').addEventListener('click', function () {
 de1Img.image(images.de1a) ,

          layer.draw(); 
        });

     document.getElementById('de1b').addEventListener('click', function () {
 de1Img.image(images.de1b) ,

          layer.draw(); 
        });

     document.getElementById('de1c').addEventListener('click', function () {
 de1Img.image(images.de1c) ,

          layer.draw(); 
        });


















    var de2Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    de2Group.on("dragstart", function () {
        BR.assign(de2Img);

    });

 de2Group.on("mouseup", function () {
        BR.assign(de2Img);

    });
    de2Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(de2Group);


    var de2Img = new Kinetic.Image({
        x: 0,
        y: 0,
            image: images.de2a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    de2Group.add(de2Img);

  
   document.getElementById('de2s').addEventListener('click', function() {
         de2Group.show();
      de2Img.show();
layer.draw();
           }, false);

    document.getElementById('de2a').addEventListener('click', function () {
 de2Img.image(images.de2a) ,

          layer.draw(); 
        });

     document.getElementById('de2b').addEventListener('click', function () {
 de2Img.image(images.de2b) ,

          layer.draw(); 
        });

     document.getElementById('de2c').addEventListener('click', function () {
 de2Img.image(images.de2c) ,

          layer.draw(); 
        });












    var de3Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    de3Group.on("dragstart", function () {
        BR.assign(de3Img);

    });

 de3Group.on("mouseup", function () {
        BR.assign(de3Img);

    });
    de3Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(de3Group);


    var de3Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.de3a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    de3Group.add(de3Img);

  
   document.getElementById('de3s').addEventListener('click', function() {
         de3Group.show();
      de3Img.show();
layer.draw();
           }, false);


    document.getElementById('de3a').addEventListener('click', function () {
 de3Img.image(images.de3a) ,

          layer.draw(); 
        });

     document.getElementById('de3b').addEventListener('click', function () {
 de3Img.image(images.de3b) ,

          layer.draw(); 
        });

     document.getElementById('de3c').addEventListener('click', function () {
 de3Img.image(images.de3c) ,

          layer.draw(); 
        });


















    var de4Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    de4Group.on("dragstart", function () {
        BR.assign(de4Img);

    });

 de4Group.on("mouseup", function () {
        BR.assign(de4Img);

    });
    de4Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(de4Group);


    var de4Img = new Kinetic.Image({
        x: 0,
        y: 0,
width:200,
height:315,
        image: images.de4a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    de4Group.add(de4Img);

  
   document.getElementById('de4s').addEventListener('click', function() {
         de4Group.show();
      de4Img.show();
layer.draw();
           }, false);

    document.getElementById('de4a').addEventListener('click', function () {
 de4Img.image(images.de4a) ,

          layer.draw(); 
        });

     document.getElementById('de4b').addEventListener('click', function () {
 de4Img.image(images.de4b) ,

          layer.draw(); 
        });

     document.getElementById('de4c').addEventListener('click', function () {
 de4Img.image(images.de4c) ,

          layer.draw(); 
        });














    var de5Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    de5Group.on("dragstart", function () {
        BR.assign(de5Img);

    });

 de5Group.on("mouseup", function () {
        BR.assign(de5Img);

    });
    de5Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(de5Group);


    var de5Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.de5,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    de5Group.add(de5Img);

  
   document.getElementById('de5s').addEventListener('click', function() {
         de5Group.show();
      de5Img.show();
layer.draw();
           }, false);

 








    var de6Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    de6Group.on("dragstart", function () {
        BR.assign(de6Img);

    });

 de6Group.on("mouseup", function () {
        BR.assign(de6Img);

    });
    de6Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(de6Group);


    var de6Img = new Kinetic.Image({
        x: 0,
        y: 0,
        image: images.de6,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    de6Group.add(de6Img);

  
   document.getElementById('de6s').addEventListener('click', function() {
         de6Group.show();
      de6Img.show();
layer.draw();
           }, false);














    var de7Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    de7Group.on("dragstart", function () {
        BR.assign(de7Img);

    });

 de7Group.on("mouseup", function () {
        BR.assign(de7Img);

    });
    de7Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(de7Group);


    var de7Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.de7,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    de7Group.add(de7Img);

  
   document.getElementById('de7s').addEventListener('click', function() {
         de7Group.show();
      de7Img.show();
layer.draw();
           }, false);









    var de8Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    de8Group.on("dragstart", function () {
        BR.assign(de8Img);

    });

 de8Group.on("mouseup", function () {
        BR.assign(de8Img);

    });
    de8Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(de8Group);


    var de8Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.de8,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    de8Group.add(de8Img);

  
   document.getElementById('de8s').addEventListener('click', function() {
         de8Group.show();
      de8Img.show();
layer.draw();
           }, false);

  










    var de9Group = new Kinetic.Group({
        x: 0,
        y: 0,

 visible:false,
        draggable: true,
    });


    de9Group.on("dragstart", function () {
        BR.assign(de9Img);

    });

 de9Group.on("mouseup", function () {
        BR.assign(de9Img);

    });
    de9Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(de9Group);


    var de9Img = new Kinetic.Image({
        x: 0,
        y: 0,
        image: images.de9,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    de9Group.add(de9Img);

  
   document.getElementById('de9s').addEventListener('click', function() {
         de9Group.show();
      de9Img.show();
layer.draw();
           }, false);














    var de10Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    de10Group.on("dragstart", function () {
        BR.assign(de10Img);

    });

 de10Group.on("mouseup", function () {
        BR.assign(de10Img);

    });
    de10Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(de10Group);


    var de10Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.de10,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    de10Group.add(de10Img);

  
   document.getElementById('de10s').addEventListener('click', function() {
         de10Group.show();
      de10Img.show();
layer.draw();
           }, false);

 








    var de11Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    de11Group.on("dragstart", function () {
        BR.assign(de11Img);

    });

 de11Group.on("mouseup", function () {
        BR.assign(de11Img);

    });
    de11Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(de11Group);


    var de11Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.de11,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    de11Group.add(de11Img);

  
   document.getElementById('de11s').addEventListener('click', function() {
         de11Group.show();
      de11Img.show();
layer.draw();
           }, false);















    var de12Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    de12Group.on("dragstart", function () {
        BR.assign(de12Img);

    });

 de12Group.on("mouseup", function () {
        BR.assign(de12Img);

    });
    de12Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(de12Group);


    var de12Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.de12,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    de12Group.add(de12Img);

  
   document.getElementById('de12s').addEventListener('click', function() {
         de12Group.show();
      de12Img.show();
layer.draw();
           }, false);

 






    var de13Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    de13Group.on("dragstart", function () {
        BR.assign(de13Img);

    });

 de13Group.on("mouseup", function () {
        BR.assign(de13Img);

    });
    de13Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(de13Group);


    var de13Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.de13,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    de13Group.add(de13Img);

  
   document.getElementById('de13s').addEventListener('click', function() {
         de13Group.show();
      de13Img.show();
layer.draw();
           }, false);
















    var de14Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    de14Group.on("dragstart", function () {
        BR.assign(de14Img);

    });

 de14Group.on("mouseup", function () {
        BR.assign(de14Img);

    });
    de14Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(de14Group);


    var de14Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.de14,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    de14Group.add(de14Img);

  
   document.getElementById('de14s').addEventListener('click', function() {
         de14Group.show();
      de14Img.show();
layer.draw();
           }, false);







    var de15Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    de15Group.on("dragstart", function () {
        BR.assign(de15Img);

    });

 de15Group.on("mouseup", function () {
        BR.assign(de15Img);

    });
    de15Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(de15Group);


    var de15Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.de15,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    de15Group.add(de15Img);

  
   document.getElementById('de15s').addEventListener('click', function() {
         de15Group.show();
      de15Img.show();
layer.draw();
           }, false);

 








    var de16Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    de16Group.on("dragstart", function () {
        BR.assign(de16Img);

    });

 de16Group.on("mouseup", function () {
        BR.assign(de16Img);

    });
    de16Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(de16Group);


    var de16Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.de16,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    de16Group.add(de16Img);

  
   document.getElementById('de16s').addEventListener('click', function() {
         de16Group.show();
      de16Img.show();
layer.draw();
           }, false);























    var ma1Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    ma1Group.on("dragstart", function () {
        BR.assign(ma1Img);

    });

 ma1Group.on("mouseup", function () {
        BR.assign(ma1Img);

    });
    ma1Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(ma1Group);


    var ma1Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.ma1a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    ma1Group.add(ma1Img);

  
   document.getElementById('ma1s').addEventListener('click', function() {
         ma1Group.show();
      ma1Img.show();
layer.draw();
           }, false);




     document.getElementById('ma1a').addEventListener('click', function () {
 ma1Img.image(images.ma1a) ,

          layer.draw(); 
        });

     document.getElementById('ma1b').addEventListener('click', function () {
 ma1Img.image(images.ma1b) ,

          layer.draw(); 
        });

     document.getElementById('ma1c').addEventListener('click', function () {
 ma1Img.image(images.ma1c) ,

          layer.draw(); 
        });


















    var ma2Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    ma2Group.on("dragstart", function () {
        BR.assign(ma2Img);

    });

 ma2Group.on("mouseup", function () {
        BR.assign(ma2Img);

    });
    ma2Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(ma2Group);


    var ma2Img = new Kinetic.Image({
        x: 0,
        y: 0,
            image: images.ma2a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    ma2Group.add(ma2Img);

  
   document.getElementById('ma2s').addEventListener('click', function() {
         ma2Group.show();
      ma2Img.show();
layer.draw();
           }, false);

    document.getElementById('ma2a').addEventListener('click', function () {
 ma2Img.image(images.ma2a) ,

          layer.draw(); 
        });

     document.getElementById('ma2b').addEventListener('click', function () {
 ma2Img.image(images.ma2b) ,

          layer.draw(); 
        });

     document.getElementById('ma2c').addEventListener('click', function () {
 ma2Img.image(images.ma2c) ,

          layer.draw(); 
        });












    var ma3Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    ma3Group.on("dragstart", function () {
        BR.assign(ma3Img);

    });

 ma3Group.on("mouseup", function () {
        BR.assign(ma3Img);

    });
    ma3Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(ma3Group);


    var ma3Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.ma3a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    ma3Group.add(ma3Img);

  
   document.getElementById('ma3s').addEventListener('click', function() {
         ma3Group.show();
      ma3Img.show();
layer.draw();
           }, false);


    document.getElementById('ma3a').addEventListener('click', function () {
 ma3Img.image(images.ma3a) ,

          layer.draw(); 
        });

     document.getElementById('ma3b').addEventListener('click', function () {
 ma3Img.image(images.ma3b) ,

          layer.draw(); 
        });

     document.getElementById('ma3c').addEventListener('click', function () {
 ma3Img.image(images.ma3c) ,

          layer.draw(); 
        });


















    var ma4Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    ma4Group.on("dragstart", function () {
        BR.assign(ma4Img);

    });

 ma4Group.on("mouseup", function () {
        BR.assign(ma4Img);

    });
    ma4Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(ma4Group);


    var ma4Img = new Kinetic.Image({
        x: 0,
        y: 0,
        image: images.ma4a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    ma4Group.add(ma4Img);

  
   document.getElementById('ma4s').addEventListener('click', function() {
         ma4Group.show();
      ma4Img.show();
layer.draw();
           }, false);

    document.getElementById('ma4a').addEventListener('click', function () {
 ma4Img.image(images.ma4a) ,

          layer.draw(); 
        });

     document.getElementById('ma4b').addEventListener('click', function () {
 ma4Img.image(images.ma4b) ,

          layer.draw(); 
        });

     document.getElementById('ma4c').addEventListener('click', function () {
 ma4Img.image(images.ma4c) ,

          layer.draw(); 
        });














    var ma5Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    ma5Group.on("dragstart", function () {
        BR.assign(ma5Img);

    });

 ma5Group.on("mouseup", function () {
        BR.assign(ma5Img);

    });
    ma5Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(ma5Group);


    var ma5Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.ma5,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    ma5Group.add(ma5Img);

  
   document.getElementById('ma5s').addEventListener('click', function() {
         ma5Group.show();
      ma5Img.show();
layer.draw();
           }, false);

 








    var ma6Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    ma6Group.on("dragstart", function () {
        BR.assign(ma6Img);

    });

 ma6Group.on("mouseup", function () {
        BR.assign(ma6Img);

    });
    ma6Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(ma6Group);


    var ma6Img = new Kinetic.Image({
        x: 0,
        y: 0,
        image: images.ma6,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    ma6Group.add(ma6Img);

  
   document.getElementById('ma6s').addEventListener('click', function() {
         ma6Group.show();
      ma6Img.show();
layer.draw();
           }, false);














    var ma7Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    ma7Group.on("dragstart", function () {
        BR.assign(ma7Img);

    });

 ma7Group.on("mouseup", function () {
        BR.assign(ma7Img);

    });
    ma7Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(ma7Group);


    var ma7Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.ma7,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    ma7Group.add(ma7Img);

  
   document.getElementById('ma7s').addEventListener('click', function() {
         ma7Group.show();
      ma7Img.show();
layer.draw();
           }, false);









    var ma8Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    ma8Group.on("dragstart", function () {
        BR.assign(ma8Img);

    });

 ma8Group.on("mouseup", function () {
        BR.assign(ma8Img);

    });
    ma8Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(ma8Group);


    var ma8Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.ma8,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    ma8Group.add(ma8Img);

  
   document.getElementById('ma8s').addEventListener('click', function() {
         ma8Group.show();
      ma8Img.show();
layer.draw();
           }, false);

  










    var ma9Group = new Kinetic.Group({
        x: 0,
        y: 0,

 visible:false,
        draggable: true,
    });


    ma9Group.on("dragstart", function () {
        BR.assign(ma9Img);

    });

 ma9Group.on("mouseup", function () {
        BR.assign(ma9Img);

    });
    ma9Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(ma9Group);


    var ma9Img = new Kinetic.Image({
        x: 0,
        y: 0,
        image: images.ma9,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    ma9Group.add(ma9Img);

  
   document.getElementById('ma9s').addEventListener('click', function() {
         ma9Group.show();
      ma9Img.show();
layer.draw();
           }, false);














    var ma10Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    ma10Group.on("dragstart", function () {
        BR.assign(ma10Img);

    });

 ma10Group.on("mouseup", function () {
        BR.assign(ma10Img);

    });
    ma10Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(ma10Group);


    var ma10Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.ma10,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    ma10Group.add(ma10Img);

  
   document.getElementById('ma10s').addEventListener('click', function() {
         ma10Group.show();
      ma10Img.show();
layer.draw();
           }, false);

 








    var ma11Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    ma11Group.on("dragstart", function () {
        BR.assign(ma11Img);

    });

 ma11Group.on("mouseup", function () {
        BR.assign(ma11Img);

    });
    ma11Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(ma11Group);


    var ma11Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.ma11,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    ma11Group.add(ma11Img);

  
   document.getElementById('ma11s').addEventListener('click', function() {
         ma11Group.show();
      ma11Img.show();
layer.draw();
           }, false);















    var ma12Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    ma12Group.on("dragstart", function () {
        BR.assign(ma12Img);

    });

 ma12Group.on("mouseup", function () {
        BR.assign(ma12Img);

    });
    ma12Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(ma12Group);


    var ma12Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.ma12,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    ma12Group.add(ma12Img);

  
   document.getElementById('ma12s').addEventListener('click', function() {
         ma12Group.show();
      ma12Img.show();
layer.draw();
           }, false);

 






    var ma13Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    ma13Group.on("dragstart", function () {
        BR.assign(ma13Img);

    });

 ma13Group.on("mouseup", function () {
        BR.assign(ma13Img);

    });
    ma13Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(ma13Group);


    var ma13Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.ma13,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    ma13Group.add(ma13Img);

  
   document.getElementById('ma13s').addEventListener('click', function() {
         ma13Group.show();
      ma13Img.show();
layer.draw();
           }, false);


















    var el1Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    el1Group.on("dragstart", function () {
        BR.assign(el1Img);

    });

 el1Group.on("mouseup", function () {
        BR.assign(el1Img);

    });
    el1Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(el1Group);


    var el1Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.el1a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    el1Group.add(el1Img);

  
   document.getElementById('el1s').addEventListener('click', function() {
         el1Group.show();
      el1Img.show();
layer.draw();
           }, false);




     document.getElementById('el1a').addEventListener('click', function () {
 el1Img.image(images.el1a) ,

          layer.draw(); 
        });

     document.getElementById('el1b').addEventListener('click', function () {
 el1Img.image(images.el1b) ,

          layer.draw(); 
        });

     document.getElementById('el1c').addEventListener('click', function () {
 el1Img.image(images.el1c) ,

          layer.draw(); 
        });


















    var el2Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    el2Group.on("dragstart", function () {
        BR.assign(el2Img);

    });

 el2Group.on("mouseup", function () {
        BR.assign(el2Img);

    });
    el2Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(el2Group);


    var el2Img = new Kinetic.Image({
        x: 0,
        y: 0,
            image: images.el2a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    el2Group.add(el2Img);

  
   document.getElementById('el2s').addEventListener('click', function() {
         el2Group.show();
      el2Img.show();
layer.draw();
           }, false);

    document.getElementById('el2a').addEventListener('click', function () {
 el2Img.image(images.el2a) ,

          layer.draw(); 
        });

     document.getElementById('el2b').addEventListener('click', function () {
 el2Img.image(images.el2b) ,

          layer.draw(); 
        });

     document.getElementById('el2c').addEventListener('click', function () {
 el2Img.image(images.el2c) ,

          layer.draw(); 
        });












    var el3Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    el3Group.on("dragstart", function () {
        BR.assign(el3Img);

    });

 el3Group.on("mouseup", function () {
        BR.assign(el3Img);

    });
    el3Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(el3Group);


    var el3Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.el3a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    el3Group.add(el3Img);

  
   document.getElementById('el3s').addEventListener('click', function() {
         el3Group.show();
      el3Img.show();
layer.draw();
           }, false);


    document.getElementById('el3a').addEventListener('click', function () {
 el3Img.image(images.el3a) ,

          layer.draw(); 
        });

     document.getElementById('el3b').addEventListener('click', function () {
 el3Img.image(images.el3b) ,

          layer.draw(); 
        });

     document.getElementById('el3c').addEventListener('click', function () {
 el3Img.image(images.el3c) ,

          layer.draw(); 
        });












    var el4Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    el4Group.on("dragstart", function () {
        BR.assign(el4Img);

    });

 el4Group.on("mouseup", function () {
        BR.assign(el4Img);

    });
    el4Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(el4Group);


    var el4Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.el4a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    el4Group.add(el4Img);

  
   document.getElementById('el4s').addEventListener('click', function() {
         el4Group.show();
      el4Img.show();
layer.draw();
           }, false);

    document.getElementById('el4a').addEventListener('click', function () {
 el4Img.image(images.el4a) ,

          layer.draw(); 
        });

     document.getElementById('el4b').addEventListener('click', function () {
 el4Img.image(images.el4b) ,

          layer.draw(); 
        });

     document.getElementById('el4c').addEventListener('click', function () {
 el4Img.image(images.el4c) ,

          layer.draw(); 
        });














    var el5Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    el5Group.on("dragstart", function () {
        BR.assign(el5Img);

    });

 el5Group.on("mouseup", function () {
        BR.assign(el5Img);

    });
    el5Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(el5Group);


    var el5Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.el5a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    el5Group.add(el5Img);

  
   document.getElementById('el5s').addEventListener('click', function() {
         el5Group.show();
      el5Img.show();
layer.draw();
           }, false);

    document.getElementById('el5a').addEventListener('click', function () {
 el5Img.image(images.el5a) ,

          layer.draw(); 
        });

     document.getElementById('el5b').addEventListener('click', function () {
 el5Img.image(images.el5b) ,

          layer.draw(); 
        });

     document.getElementById('el5c').addEventListener('click', function () {
 el5Img.image(images.el5c) ,

          layer.draw(); 
        });








    var el6Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    el6Group.on("dragstart", function () {
        BR.assign(el6Img);

    });

 el6Group.on("mouseup", function () {
        BR.assign(el6Img);

    });
    el6Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(el6Group);


    var el6Img = new Kinetic.Image({
        x: 0,
        y: 0,
        image: images.el6,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    el6Group.add(el6Img);

  
   document.getElementById('el6s').addEventListener('click', function() {
         el6Group.show();
      el6Img.show();
layer.draw();
           }, false);














    var el7Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    el7Group.on("dragstart", function () {
        BR.assign(el7Img);

    });

 el7Group.on("mouseup", function () {
        BR.assign(el7Img);

    });
    el7Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(el7Group);


    var el7Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.el7,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    el7Group.add(el7Img);

  
   document.getElementById('el7s').addEventListener('click', function() {
         el7Group.show();
      el7Img.show();
layer.draw();
           }, false);









    var el8Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    el8Group.on("dragstart", function () {
        BR.assign(el8Img);

    });

 el8Group.on("mouseup", function () {
        BR.assign(el8Img);

    });
    el8Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(el8Group);


    var el8Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.el8,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    el8Group.add(el8Img);

  
   document.getElementById('el8s').addEventListener('click', function() {
         el8Group.show();
      el8Img.show();
layer.draw();
           }, false);












    var el9Group = new Kinetic.Group({
        x: 0,
        y: 0,

 visible:false,
        draggable: true,
    });


    el9Group.on("dragstart", function () {
        BR.assign(el9Img);

    });

 el9Group.on("mouseup", function () {
        BR.assign(el9Img);

    });
    el9Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(el9Group);


    var el9Img = new Kinetic.Image({
        x: 0,
        y: 0,
        image: images.el9,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    el9Group.add(el9Img);

  
   document.getElementById('el9s').addEventListener('click', function() {
         el9Group.show();
      el9Img.show();
layer.draw();
           }, false);














    var el10Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    el10Group.on("dragstart", function () {
        BR.assign(el10Img);

    });

 el10Group.on("mouseup", function () {
        BR.assign(el10Img);

    });
    el10Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(el10Group);


    var el10Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.el10,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    el10Group.add(el10Img);

  
   document.getElementById('el10s').addEventListener('click', function() {
         el10Group.show();
      el10Img.show();
layer.draw();
           }, false);

  






















var el11Img = new Kinetic.Image({
        x: 0,
        y: 600,
height:164,
width:1000,
           image: images.el11,
        visible: false,
     
        name: 'image'

    });
    
    layer.add(el11Img);

   document.getElementById('el11s').addEventListener('click', function() {
      el11Img.show();
 el13Img.hide();
 el12Img.hide();
   fl2Img.hide();
   fl3Img.hide();
   fl4Img.hide();
   fl5Img.hide();
   fl6Img.hide();
   fl7Img.hide();
   fl8Img.hide();
   fl9Img.hide();
   fl10Img.hide();
fl11Img.show();
      fl1Img.hide();
   fl12Img.hide();
layer.draw();

        }, false);


















var el12Img = new Kinetic.Image({
        x: 0,
        y: 600,
height:164,
width:1000,
           image: images.el12,
        visible: false,
     
        name: 'image'

    });
    
    layer.add(el12Img);

   document.getElementById('el12s').addEventListener('click', function() {
      el12Img.show();
 el13Img.hide();
 el11Img.hide();
   fl2Img.hide();
   fl3Img.hide();
   fl4Img.hide();
   fl5Img.hide();
   fl6Img.hide();
   fl7Img.hide();
   fl8Img.hide();
   fl9Img.hide();
   fl10Img.hide();
fl11Img.show();
      fl1Img.hide();
   fl12Img.hide();
layer.draw();

        }, false);










var el13Img = new Kinetic.Image({
        x: 0,
        y: 600,
height:164,
width:1000,
           image: images.el13,
        visible: false,
     
        name: 'image'

    });
    
    layer.add(el13Img);

   document.getElementById('el13s').addEventListener('click', function() {
      el13Img.show();
 el11Img.hide();
 el12Img.hide();
   fl2Img.hide();
   fl3Img.hide();
   fl4Img.hide();
   fl5Img.hide();
   fl6Img.hide();
   fl7Img.hide();
   fl8Img.hide();
   fl9Img.hide();
   fl10Img.hide();
fl11Img.show();
      fl1Img.hide();
   fl12Img.hide();
layer.draw();

        }, false);










var el14Img = new Kinetic.Image({
        x: 0,
        y: 0,
width:1000,
height:764,
           image: images.el14,
        visible: false,
     
        name: 'image'

    });
    
    layer.add(el14Img);


  
   document.getElementById('el14s').addEventListener('click', function() {
     el14Img.moveToBottom();
 el15Img.hide();
 el14Img.show();
      wa7Img.hide();
        wa1Img.hide();
        wa2Img.hide();
        wa4Img.hide();
    wa3Img.hide();
   wa5Img.hide();
   wa6Img.hide();
   wa8Img.hide();
  wa9Img.hide();
  wa10Img.hide();
  wa11Img.hide();
  wa12Img.hide();
  wa13Img.hide();
  wa14Img.hide();
  wa15Img.hide();
  wa16Img.hide();
  wa17Img.hide();
  wa18Img.hide();
wa19Img.hide();
wa20Img.hide();
wa21Img.hide();
wa22Img.hide();
wa23Img.hide();
wa24Img.hide();
wa25Img.hide();
wa26Img.hide();
wa27Img.hide();
layer.draw();
           }, false);







var el15Img = new Kinetic.Image({
        x: 0,
        y: 0,
width:1000,
height:764,
           image: images.el15,
        visible: false,
     
        name: 'image'

    });
    
    layer.add(el15Img);


  
   document.getElementById('el15s').addEventListener('click', function() {
     el15Img.moveToBottom();
 el14Img.hide();
 el15Img.show();
      wa7Img.hide();
        wa1Img.hide();
        wa2Img.hide();
        wa4Img.hide();
    wa3Img.hide();
   wa5Img.hide();
   wa6Img.hide();
   wa8Img.hide();
  wa9Img.hide();
  wa10Img.hide();
  wa11Img.hide();
  wa12Img.hide();
  wa13Img.hide();
  wa14Img.hide();
  wa15Img.hide();
  wa16Img.hide();
  wa17Img.hide();
  wa18Img.hide();
wa19Img.hide();
wa20Img.hide();
wa21Img.hide();
wa22Img.hide();
wa23Img.hide();
wa24Img.hide();
wa25Img.hide();
wa26Img.hide();
wa27Img.hide();
layer.draw();
           }, false);








    var li1Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    li1Group.on("dragstart", function () {
        BR.assign(li1Img);

    });

 li1Group.on("mouseup", function () {
        BR.assign(li1Img);

    });
    li1Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(li1Group);


    var li1Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.li1a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    li1Group.add(li1Img);

  
   document.getElementById('li1s').addEventListener('click', function() {
         li1Group.show();
      li1Img.show();
layer.draw();
           }, false);




     document.getElementById('li1a').addEventListener('click', function () {
 li1Img.image(images.li1a) ,

          layer.draw(); 
        });

     document.getElementById('li1b').addEventListener('click', function () {
 li1Img.image(images.li1b) ,

          layer.draw(); 
        });

     document.getElementById('li1c').addEventListener('click', function () {
 li1Img.image(images.li1c) ,

          layer.draw(); 
        });


















    var li2Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    li2Group.on("dragstart", function () {
        BR.assign(li2Img);

    });

 li2Group.on("mouseup", function () {
        BR.assign(li2Img);

    });
    li2Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(li2Group);


    var li2Img = new Kinetic.Image({
        x: 0,
        y: 0,
            image: images.li2a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    li2Group.add(li2Img);

  
   document.getElementById('li2s').addEventListener('click', function() {
         li2Group.show();
      li2Img.show();
layer.draw();
           }, false);

    document.getElementById('li2a').addEventListener('click', function () {
 li2Img.image(images.li2a) ,

          layer.draw(); 
        });

     document.getElementById('li2b').addEventListener('click', function () {
 li2Img.image(images.li2b) ,

          layer.draw(); 
        });

     document.getElementById('li2c').addEventListener('click', function () {
 li2Img.image(images.li2c) ,

          layer.draw(); 
        });












    var li3Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    li3Group.on("dragstart", function () {
        BR.assign(li3Img);

    });

 li3Group.on("mouseup", function () {
        BR.assign(li3Img);

    });
    li3Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(li3Group);


    var li3Img = new Kinetic.Image({
        x: 0,
        y: 0,
width:176,
height:300,
        image: images.li3a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    li3Group.add(li3Img);

  
   document.getElementById('li3s').addEventListener('click', function() {
         li3Group.show();
      li3Img.show();
layer.draw();
           }, false);


    document.getElementById('li3a').addEventListener('click', function () {
 li3Img.image(images.li3a) ,

          layer.draw(); 
        });

     document.getElementById('li3b').addEventListener('click', function () {
 li3Img.image(images.li3b) ,

          layer.draw(); 
        });

     document.getElementById('li3c').addEventListener('click', function () {
 li3Img.image(images.li3c) ,

          layer.draw(); 
        });


















    var li4Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    li4Group.on("dragstart", function () {
        BR.assign(li4Img);

    });

 li4Group.on("mouseup", function () {
        BR.assign(li4Img);

    });
    li4Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(li4Group);


    var li4Img = new Kinetic.Image({
        x: 0,
        y: 0,
width:161,
height:300,
        image: images.li4a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    li4Group.add(li4Img);

  
   document.getElementById('li4s').addEventListener('click', function() {
         li4Group.show();
      li4Img.show();
layer.draw();
           }, false);

    document.getElementById('li4a').addEventListener('click', function () {
 li4Img.image(images.li4a) ,

          layer.draw(); 
        });

     document.getElementById('li4b').addEventListener('click', function () {
 li4Img.image(images.li4b) ,

          layer.draw(); 
        });

     document.getElementById('li4c').addEventListener('click', function () {
 li4Img.image(images.li4c) ,

          layer.draw(); 
        });














    var li5Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    li5Group.on("dragstart", function () {
        BR.assign(li5Img);

    });

 li5Group.on("mouseup", function () {
        BR.assign(li5Img);

    });
    li5Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(li5Group);


    var li5Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.li5a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    li5Group.add(li5Img);

  
   document.getElementById('li5s').addEventListener('click', function() {
         li5Group.show();
      li5Img.show();
layer.draw();
           }, false);

    document.getElementById('li5a').addEventListener('click', function () {
 li5Img.image(images.li5a) ,

          layer.draw(); 
        });

     document.getElementById('li5b').addEventListener('click', function () {
 li5Img.image(images.li5b) ,

          layer.draw(); 
        });

     document.getElementById('li5c').addEventListener('click', function () {
 li5Img.image(images.li5c) ,

          layer.draw(); 
        });








    var li6Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    li6Group.on("dragstart", function () {
        BR.assign(li6Img);

    });

 li6Group.on("mouseup", function () {
        BR.assign(li6Img);

    });
    li6Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(li6Group);


    var li6Img = new Kinetic.Image({
        x: 0,
        y: 0,
        image: images.li6,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    li6Group.add(li6Img);

  
   document.getElementById('li6s').addEventListener('click', function() {
         li6Group.show();
      li6Img.show();
layer.draw();
           }, false);














    var li7Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    li7Group.on("dragstart", function () {
        BR.assign(li7Img);

    });

 li7Group.on("mouseup", function () {
        BR.assign(li7Img);

    });
    li7Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(li7Group);


    var li7Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.li7,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    li7Group.add(li7Img);

  
   document.getElementById('li7s').addEventListener('click', function() {
         li7Group.show();
      li7Img.show();
layer.draw();
           }, false);









    var li8Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    li8Group.on("dragstart", function () {
        BR.assign(li8Img);

    });

 li8Group.on("mouseup", function () {
        BR.assign(li8Img);

    });
    li8Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(li8Group);


    var li8Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.li8,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    li8Group.add(li8Img);

  
   document.getElementById('li8s').addEventListener('click', function() {
         li8Group.show();
      li8Img.show();
layer.draw();
           }, false);












    var li9Group = new Kinetic.Group({
        x: 0,
        y: 0,

 visible:false,
        draggable: true,
    });


    li9Group.on("dragstart", function () {
        BR.assign(li9Img);

    });

 li9Group.on("mouseup", function () {
        BR.assign(li9Img);

    });
    li9Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(li9Group);


    var li9Img = new Kinetic.Image({
        x: 0,
        y: 0,
        image: images.li9,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    li9Group.add(li9Img);

  
   document.getElementById('li9s').addEventListener('click', function() {
         li9Group.show();
      li9Img.show();
layer.draw();
           }, false);














    var li10Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    li10Group.on("dragstart", function () {
        BR.assign(li10Img);

    });

 li10Group.on("mouseup", function () {
        BR.assign(li10Img);

    });
    li10Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(li10Group);


    var li10Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.li10,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    li10Group.add(li10Img);

  
   document.getElementById('li10s').addEventListener('click', function() {
         li10Group.show();
      li10Img.show();
layer.draw();
           }, false);

  











    var li11Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    li11Group.on("dragstart", function () {
        BR.assign(li11Img);

    });

 li11Group.on("mouseup", function () {
        BR.assign(li11Img);

    });
    li11Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(li11Group);


    var li11Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.li11,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    li11Group.add(li11Img);

  
   document.getElementById('li11s').addEventListener('click', function() {
         li11Group.show();
      li11Img.show();
layer.draw();
           }, false);













    var li12Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    li12Group.on("dragstart", function () {
        BR.assign(li12Img);

    });

 li12Group.on("mouseup", function () {
        BR.assign(li12Img);

    });
    li12Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(li12Group);


    var li12Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.li12,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    li12Group.add(li12Img);

  
   document.getElementById('li12s').addEventListener('click', function() {
         li12Group.show();
      li12Img.show();
layer.draw();
           }, false);

 






    var li13Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    li13Group.on("dragstart", function () {
        BR.assign(li13Img);

    });

 li13Group.on("mouseup", function () {
        BR.assign(li13Img);

    });
    li13Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(li13Group);


    var li13Img = new Kinetic.Image({
        x: 0,
        y: 0,
width:356,
height:300,
        image: images.li13,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    li13Group.add(li13Img);

  
   document.getElementById('li13s').addEventListener('click', function() {
         li13Group.show();
      li13Img.show();
layer.draw();
           }, false);













    var ta1Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    ta1Group.on("dragstart", function () {
        BR.assign(ta1Img);

    });

 ta1Group.on("mouseup", function () {
        BR.assign(ta1Img);

    });
    ta1Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(ta1Group);


    var ta1Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.ta1a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    ta1Group.add(ta1Img);

  
   document.getElementById('ta1s').addEventListener('click', function() {
         ta1Group.show();
      ta1Img.show();
layer.draw();
           }, false);




     document.getElementById('ta1a').addEventListener('click', function () {
 ta1Img.image(images.ta1a) ,

          layer.draw(); 
        });

     document.getElementById('ta1b').addEventListener('click', function () {
 ta1Img.image(images.ta1b) ,

          layer.draw(); 
        });

     document.getElementById('ta1c').addEventListener('click', function () {
 ta1Img.image(images.ta1c) ,

          layer.draw(); 
        });


















    var ta2Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    ta2Group.on("dragstart", function () {
        BR.assign(ta2Img);

    });

 ta2Group.on("mouseup", function () {
        BR.assign(ta2Img);

    });
    ta2Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(ta2Group);


    var ta2Img = new Kinetic.Image({
        x: 0,
        y: 0,
width:300,
height:343,
            image: images.ta2a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    ta2Group.add(ta2Img);

  
   document.getElementById('ta2s').addEventListener('click', function() {
         ta2Group.show();
      ta2Img.show();
layer.draw();
           }, false);

    document.getElementById('ta2a').addEventListener('click', function () {
 ta2Img.image(images.ta2a) ,

          layer.draw(); 
        });

     document.getElementById('ta2b').addEventListener('click', function () {
 ta2Img.image(images.ta2b) ,

          layer.draw(); 
        });

     document.getElementById('ta2c').addEventListener('click', function () {
 ta2Img.image(images.ta2c) ,

          layer.draw(); 
        });












    var ta3Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    ta3Group.on("dragstart", function () {
        BR.assign(ta3Img);

    });

 ta3Group.on("mouseup", function () {
        BR.assign(ta3Img);

    });
    ta3Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(ta3Group);


    var ta3Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.ta3a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    ta3Group.add(ta3Img);

  
   document.getElementById('ta3s').addEventListener('click', function() {
         ta3Group.show();
      ta3Img.show();
layer.draw();
           }, false);


    document.getElementById('ta3a').addEventListener('click', function () {
 ta3Img.image(images.ta3a) ,

          layer.draw(); 
        });

     document.getElementById('ta3b').addEventListener('click', function () {
 ta3Img.image(images.ta3b) ,

          layer.draw(); 
        });

     document.getElementById('ta3c').addEventListener('click', function () {
 ta3Img.image(images.ta3c) ,

          layer.draw(); 
        });


















    var ta4Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    ta4Group.on("dragstart", function () {
        BR.assign(ta4Img);

    });

 ta4Group.on("mouseup", function () {
        BR.assign(ta4Img);

    });
    ta4Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(ta4Group);


    var ta4Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.ta4a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    ta4Group.add(ta4Img);

  
   document.getElementById('ta4s').addEventListener('click', function() {
         ta4Group.show();
      ta4Img.show();
layer.draw();
           }, false);

    document.getElementById('ta4a').addEventListener('click', function () {
 ta4Img.image(images.ta4a) ,

          layer.draw(); 
        });

     document.getElementById('ta4b').addEventListener('click', function () {
 ta4Img.image(images.ta4b) ,

          layer.draw(); 
        });

     document.getElementById('ta4c').addEventListener('click', function () {
 ta4Img.image(images.ta4c) ,

          layer.draw(); 
        });














    var ta5Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    ta5Group.on("dragstart", function () {
        BR.assign(ta5Img);

    });

 ta5Group.on("mouseup", function () {
        BR.assign(ta5Img);

    });
    ta5Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(ta5Group);


    var ta5Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.ta5a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    ta5Group.add(ta5Img);

  
   document.getElementById('ta5s').addEventListener('click', function() {
         ta5Group.show();
      ta5Img.show();
layer.draw();
           }, false);

    document.getElementById('ta5a').addEventListener('click', function () {
 ta5Img.image(images.ta5a) ,

          layer.draw(); 
        });

     document.getElementById('ta5b').addEventListener('click', function () {
 ta5Img.image(images.ta5b) ,

          layer.draw(); 
        });

     document.getElementById('ta5c').addEventListener('click', function () {
 ta5Img.image(images.ta5c) ,

          layer.draw(); 
        });








    var ta6Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    ta6Group.on("dragstart", function () {
        BR.assign(ta6Img);

    });

 ta6Group.on("mouseup", function () {
        BR.assign(ta6Img);

    });
    ta6Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(ta6Group);


    var ta6Img = new Kinetic.Image({
        x: 0,
        y: 0,
        image: images.ta6a,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    ta6Group.add(ta6Img);

  
   document.getElementById('ta6s').addEventListener('click', function() {
         ta6Group.show();
      ta6Img.show();
layer.draw();
           }, false);



    document.getElementById('ta6a').addEventListener('click', function () {
 ta6Img.image(images.ta6a) ,

          layer.draw(); 
        });

     document.getElementById('ta6b').addEventListener('click', function () {
 ta6Img.image(images.ta6b) ,

          layer.draw(); 
        });

     document.getElementById('ta6c').addEventListener('click', function () {
 ta6Img.image(images.ta6c) ,

          layer.draw(); 
        });













    var ta7Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    ta7Group.on("dragstart", function () {
        BR.assign(ta7Img);

    });

 ta7Group.on("mouseup", function () {
        BR.assign(ta7Img);

    });
    ta7Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(ta7Group);


    var ta7Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.ta7,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    ta7Group.add(ta7Img);

  
   document.getElementById('ta7s').addEventListener('click', function() {
         ta7Group.show();
      ta7Img.show();
layer.draw();
           }, false);









    var ta8Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    ta8Group.on("dragstart", function () {
        BR.assign(ta8Img);

    });

 ta8Group.on("mouseup", function () {
        BR.assign(ta8Img);

    });
    ta8Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(ta8Group);


    var ta8Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.ta8,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    ta8Group.add(ta8Img);

  
   document.getElementById('ta8s').addEventListener('click', function() {
         ta8Group.show();
      ta8Img.show();
layer.draw();
           }, false);












    var ta9Group = new Kinetic.Group({
        x: 0,
        y: 0,

 visible:false,
        draggable: true,
    });


    ta9Group.on("dragstart", function () {
        BR.assign(ta9Img);

    });

 ta9Group.on("mouseup", function () {
        BR.assign(ta9Img);

    });
    ta9Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(ta9Group);


    var ta9Img = new Kinetic.Image({
        x: 0,
        y: 0,
        image: images.ta9,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    ta9Group.add(ta9Img);

  
   document.getElementById('ta9s').addEventListener('click', function() {
         ta9Group.show();
      ta9Img.show();
layer.draw();
           }, false);














    var ta10Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    ta10Group.on("dragstart", function () {
        BR.assign(ta10Img);

    });

 ta10Group.on("mouseup", function () {
        BR.assign(ta10Img);

    });
    ta10Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(ta10Group);


    var ta10Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.ta10,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    ta10Group.add(ta10Img);

  
   document.getElementById('ta10s').addEventListener('click', function() {
         ta10Group.show();
      ta10Img.show();
layer.draw();
           }, false);

  











    var ta11Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    ta11Group.on("dragstart", function () {
        BR.assign(ta11Img);

    });

 ta11Group.on("mouseup", function () {
        BR.assign(ta11Img);

    });
    ta11Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(ta11Group);


    var ta11Img = new Kinetic.Image({
        x: 0,
        y: 0,
width:400,
height:201,
        image: images.ta11,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    ta11Group.add(ta11Img);

  
   document.getElementById('ta11s').addEventListener('click', function() {
         ta11Group.show();
      ta11Img.show();
layer.draw();
           }, false);













    var ta12Group = new Kinetic.Group({
        x: 0,
        y: 0,
 visible:false,
        draggable: true,
    });


    ta12Group.on("dragstart", function () {
        BR.assign(ta12Img);

    });

 ta12Group.on("mouseup", function () {
        BR.assign(ta12Img);

    });
    ta12Group.on('dragstart', function () {
        this.moveToTop();
    });



    layer.add(ta12Group);


    var ta12Img = new Kinetic.Image({
        x: 0,
        y: 0,

        image: images.ta12,
        visible: false,
        draggable: true,

        name: 'image'

    });
    
    
    ta12Group.add(ta12Img);

  
   document.getElementById('ta12s').addEventListener('click', function() {
         ta12Group.show();
      ta12Img.show();
layer.draw();
           }, false);



}




 



    stage.add(layer);




     document.getElementById('save2').addEventListener('click', function() {
     
        stage.toDataURL({
          callback: function(dataUrl) {
          
            window.open(dataUrl);
          }
        });
      }, false);


    
      

  
    stage.draw();
 
 

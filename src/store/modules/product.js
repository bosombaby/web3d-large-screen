import { defineStore } from 'pinia'

const useProductStore = defineStore('product', {
    state: () => {
        return {
            mainList: [

                { title: '作品介绍', single: true },
                { title: '项目介绍', link: 'docs/brief.html', author: '', photo_url: 'textures/项目介绍.png' },


                { title: '最新作品', single: true },
                { title: '中国国旗', link: 'examples/shader/shader_national_flag.html', author: '', photo_url: 'textures/中国国旗.png' },
                { title: '三维数字化地球', link: 'examples/gis/cesium_world.html', author: '', photo_url: 'textures/三维数字化地球.png' },
                { title: '漫画-蜘蛛侠', link: 'examples/comic/spider-man.html', author: '', photo_url: 'textures/漫画-蜘蛛侠.png' },


                { title: '热门作品', single: true },
                { title: '堆箱子', link: 'examples/game/stack_boxes.html', author: '', photo_url: 'textures/堆箱子.jpg' },
                { title: '旋转魔方', link: 'examples/game/magic_cube.html', author: '', photo_url: 'textures/旋转魔方.png' },
                { title: '迷失太空', link: 'examples/particles/lost_in_space.html', author: '', photo_url: 'textures/迷失太空.png' },


                { title: '认识3D', single: true },
                { title: '正方体', link: 'examples/basic/cube_basic.html', author: '', photo_url: 'textures/正方体.png' },
                { title: '基础动画', link: 'examples/basic/animate_basic.html', author: '', photo_url: 'textures/基础动画.jpg' },
                { title: '后期处理', link: 'examples/processing/post_processing_basic.html', author: '', photo_url: 'textures/后期处理入门.png' },
                { title: '着色器', link: 'examples/shader/shader_advance.html', author: '', photo_url: 'textures/着色器进阶.png' },
                { title: '阴影投射', link: 'examples/basic/shadow_basic.html', author: '', photo_url: 'textures/基础阴影投射.png' },
                { title: '乐高模型', link: 'examples/basic/lego_model.html', author: '', photo_url: 'textures/乐高模型.jpg' },


                { title: '立体数学', single: true },
                { title: '正方体', link: 'examples/basic/cube_basic.html', author: '', photo_url: 'textures/正方体.png' },
                { title: '3D字体', link: 'examples/basic/fonts_basic.html', author: '', photo_url: 'textures/3D字体.png' },
                { title: '顶点绘制', link: 'examples/basic/buffer_basic.html', author: '', photo_url: 'textures/顶点绘制.png' },
                { title: '粒子平面墙', link: 'examples/particles/points_wall.html', author: '', photo_url: 'textures/粒子平面墙.png' },
                { title: '粒子海浪', link: 'examples/particles/particles_sea.html', author: '', photo_url: 'textures/粒子海浪.png' },
                { title: '线条交互', link: 'examples/math/interactive_lines.html', author: '', photo_url: 'textures/线条交互.jpg' },
                { title: '线条模拟', link: 'examples/math/spline_editor.html', author: '', photo_url: 'textures/线条模拟.jpg' },

                { title: '化学探索', single: true },
                { title: '元素周期表', link: 'examples/chemistry/periodic_table.html', author: '', photo_url: 'textures/元素周期表.jpg' },
                { title: '化学分子式', link: 'examples/chemistry/formula.html', author: '', photo_url: 'textures/化学分子式.jpg' },



                { title: '动漫角色', single: true },
                { title: '漫画-蜘蛛侠', link: 'examples/comic/spider-man.html', author: '', photo_url: 'textures/漫画-蜘蛛侠.png' },
                { title: '狂战士', link: 'examples/comic/soldier_model.html', author: '', photo_url: 'textures/狂战士.jpg' },
                { title: '初音未来', link: 'examples/comic/hatsune_miku.html', author: '', photo_url: 'textures/初音未来.jpg' },


                { title: '天文探索', single: true },
                { title: '银河系', link: 'examples/particles/galaxy_generator.html', author: '', photo_url: 'textures/银河系.png' },
                { title: '迷失太空', link: 'examples/particles/lost_in_space.html', author: '', photo_url: 'textures/迷失太空.png' },
                { title: '太空舱', link: 'examples/space/spacecraft.html', author: '', photo_url: 'textures/太空舱.jpg' },
                { title: '星球漫游', link: 'examples/basic/planet_walk.html', author: '', photo_url: 'textures/星球漫游.png' },

                { title: '艺术文化', single: true },
                { title: '中国国旗', link: 'examples/shader/shader_national_flag.html', author: '', photo_url: 'textures/中国国旗.png' },
                { title: '生命立方体', link: 'examples/art/life_cube.html', author: '', photo_url: 'textures/生命立方体.png' },
                { title: '雕塑', link: 'examples/art/sculpture.html', author: '', photo_url: 'textures/雕塑.jpg' },
                { title: '线条着色', link: 'examples/art/colored_line.html', author: '', photo_url: 'textures/线条着色.jpg' },
                { title: '城堡', link: 'examples/art/castle.html', author: '', photo_url: 'textures/城堡.jpg' },
                { title: '梦幻小屋', link: 'examples/art/dream_house.html', author: '', photo_url: 'textures/梦幻小屋.jpg' },


                { title: '工程制造', single: true },
                { title: '机房监测', link: 'examples/visualization/machine_room.html', author: '', photo_url: 'textures/机房监测.png' },
                { title: '虚幻花朵', link: 'examples/processing/webgl_postprocessing_unreal_bloom.html', author: '', photo_url: 'textures/虚幻花朵.png' },
                { title: '电脑主机拆解', link: 'examples/visualization/computer_host.html', author: '', photo_url: 'textures/电脑主机拆解.png' },
                { title: '平面装修设计', link: 'examples/engineering/plane_design.html', author: '', photo_url: 'textures/平面装修设计.png' },

                { title: '医学追迹', single: true },
                { title: '人体构造', link: 'examples/medicine/human_body.html', author: '', photo_url: 'textures/人体构造.png' },
                { title: '人脑切片', link: 'examples/medicine/human_head.html', author: '', photo_url: 'textures/人脑切片.jpg' },



                { title: '地理信息', single: true },
                { title: '三维数字化🌏', link: 'examples/gis/cesium_world.html', author: '', photo_url: 'textures/三维数字化地球.png' },


                { title: '趣味游戏', single: true },
                { title: '鬼屋', link: 'examples/project/haunted_house.html', author: '', photo_url: 'textures/鬼屋.png' },
                { title: '堆箱子', link: 'examples/game/stack_boxes.html', author: '', photo_url: 'textures/堆箱子.jpg' },
                { title: '旋转魔方', link: 'examples/game/magic_cube.html', author: '', photo_url: 'textures/旋转魔方.png' },
                { title: '车辆换肤', link: 'examples/game/materials_car.html', author: '', photo_url: 'textures/车辆换肤.jpg' },
                { title: '学习旅途', link: 'examples/game/3d_trip.html', author: '', photo_url: 'textures/学习旅途.png' },

                { title: 'AR/VR（待更新）', single: true },



            ]
        }
    }
})

export default useProductStore